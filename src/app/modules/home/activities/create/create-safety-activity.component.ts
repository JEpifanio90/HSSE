import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { IQuestion } from 'src/app/shared/models/question.interface';
import { FormsHelper } from 'src/app/shared/utils/forms.helper';
import { ISafetyActivity } from 'src/app/shared/models/safety-activity.interface';
import { ActivitiesService } from 'src/app/core/http/activities/activities.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'hsse-create-safety-activity',
  templateUrl: './create-safety-activity.component.html',
  styleUrls: ['./create-safety-activity.component.scss']
})
export class CreateSafetyActivityComponent {
  public safetyActivitiesForm: FormGroup;
  public safetyActivitiesQuestions: Array<IQuestion> = [];
  public formsHelper = new FormsHelper();

  constructor(
    private acr: ActivatedRoute,
    private activityService: ActivitiesService,
    private router: Router,
    private snackService: MatSnackBar,
    private sessionService: SessionService
  ) {
    this.acr.data.subscribe((data: { questions: Array<IQuestion> }) => {
      this.safetyActivitiesForm = this.formsHelper.toFormGroup(data.questions);
      this.safetyActivitiesQuestions = data.questions;
      this.retrieveSites();
    });
  }

  public createActivity() {
    this.activityService.createSafetyActivity(this.safetyActivitiesForm.getRawValue() as ISafetyActivity).subscribe(
      () => {
        this.safetyActivitiesForm.reset();
        this.router.navigate(['home']);
        this.snackService.open('Activity created!', 'OK', { duration: 2800 });
      },
      (exception: string) => { console.log(exception); }
    );
  }

  public retrieveSites() {
    const options  = [];
    for (const site of this.sessionService.sites) {
      options.push({ name: site.name, value: site.id });
    }
    this.safetyActivitiesQuestions[2].options = options;
  }
}
