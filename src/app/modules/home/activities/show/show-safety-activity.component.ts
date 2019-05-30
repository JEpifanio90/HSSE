import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IQuestion } from 'src/app/shared/models/question.interface';
import { ISafetyActivity } from 'src/app/shared/models/safety-activity.interface';
import { ActivitiesService } from 'src/app/core/http/activities/activities.service';

@Component({
  selector: 'hsse-show-safety-activity',
  templateUrl: './show-safety-activity.component.html',
  styleUrls: ['./show-safety-activity.component.scss']
})
export class ShowSafetyActivityComponent {
  public safetyActivitiesForm: FormGroup;
  public safetyActivitiesQuestions: Array<IQuestion> = [];
  public activities: Array<ISafetyActivity> = [];

  constructor(private activityService: ActivitiesService) {
    this.getActivities();
  }

  public deleteSafetyAct(activity: ISafetyActivity) {
    this.activityService.deleteSafetyActivity(activity).subscribe(
      () => {
        this.activities.splice(this.activities.indexOf(activity), 1);
      },
      (exception: string) => {
        console.log(exception);
      }
    );
  }

  private getActivities() {
    this.activityService.getSafetyActivities().subscribe(
      (activities: Array<ISafetyActivity>) => {
        this.activities = activities;
      },
      (exception: string) => { console.log(exception); }
    );
  }

}
