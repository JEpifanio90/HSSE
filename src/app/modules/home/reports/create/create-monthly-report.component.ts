import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { IQuestion } from 'src/app/shared/models/question.interface';
import { FormsHelper } from 'src/app/shared/utils/forms.helper';
import { IMonthlyReport } from 'src/app/shared/models/monthly-report.interface';
import { ReportsService } from 'src/app/core/http/reports/reports.service';

@Component({
  selector: 'hsse-create-monthly-report',
  templateUrl: './create-monthly-report.component.html',
  styleUrls: ['./create-monthly-report.component.scss']
})
export class CreateMonthlyReportComponent {
  public monthlyForm: FormGroup;
  public monthlyQuestions: Array<IQuestion> = [];
  public formsHelper = new FormsHelper();

  constructor(
    private acr: ActivatedRoute,
    private router: Router,
    private snackService: MatSnackBar,
    private monthlyReportService: ReportsService
  ) {
    this.getQuestions();
  }

  public createMonthlyReport(): void {
    this.monthlyReportService.createMonthlyReport(this.monthlyForm.getRawValue() as IMonthlyReport).subscribe(
      () => {
        this.monthlyForm.reset();
        this.router.navigate(['home']);
        this.snackService.open('Monthly Report created!', 'OK', { duration: 2800 });
      },
      (error: string) => {
        this.snackService.open(error, 'OK', { duration: 2800 });
      }
    );
  }

  private getQuestions(): void {
    this.acr.data.subscribe((data: { questions: Array<IQuestion> }) => {
      this.monthlyQuestions = data.questions;
      this.monthlyForm = this.formsHelper.toFormGroup(data.questions);
    });
  }
}
