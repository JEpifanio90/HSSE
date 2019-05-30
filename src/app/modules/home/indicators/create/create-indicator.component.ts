import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { IQuestion } from 'src/app/shared/models/question.interface';
import { FormsHelper } from 'src/app/shared/utils/forms.helper';
import { IEnvironmentalIndicator } from 'src/app/shared/models/environmental-indicator.interface';
import { ISite } from 'src/app/shared/models/site.interface';
import { IndicatorsService } from 'src/app/core/http/indicators/indicators.service';
import { UtilsService } from 'src/app/core/http/utils/utils.service';

@Component({
  selector: 'hsse-create-indicator',
  templateUrl: './create-indicator.component.html',
  styleUrls: ['./create-indicator.component.scss']
})
export class CreateIndicatorComponent {
  public environmentalForm: FormGroup;
  public environmentalQuestions: Array<IQuestion> = [];
  public formsHelper = new FormsHelper();

  constructor(
    private acr: ActivatedRoute,
    private indicatorService: IndicatorsService,
    private utilService: UtilsService,
    private router: Router,
    private snackService: MatSnackBar
  ) {
    this.getQuestions();
  }

  public createIndicator(): void {
    this.indicatorService.createIndicator(this.environmentalForm.getRawValue() as IEnvironmentalIndicator).subscribe(
      () => {
        this.environmentalForm.reset();
        this.router.navigate(['home']);
        this.snackService.open('Environmental Indicator created!', 'OK', { duration: 2800 });
      },
      (error: string) => {
        this.snackService.open(error, 'OK', { duration: 2800 });
      }
    );
  }

  private getQuestions(): void {
    this.acr.data.subscribe((data: { questions: Array<IQuestion> }) => {
      this.environmentalQuestions = data.questions;
      this.environmentalForm = this.formsHelper.toFormGroup(this.environmentalQuestions);
      this.getSites();
    });
  }

  private getSites(): void {
    const options  = [];
    this.utilService.getDataFor('sites').subscribe(
      (sitesList: Array<ISite>) => {
        for (const site of sitesList) {
          options.push({ name: site.name, value: site.id });
        }

        this.environmentalQuestions[9].options = options;
      },
      (exception: string) => {
        this.snackService.open(exception, 'OK', { duration: 2800 });
      }
    );
  }
}
