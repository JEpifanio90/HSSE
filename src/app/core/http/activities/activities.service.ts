import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '../request.service';
import { ISafetyActivity } from 'src/app/shared/models/safety-activity.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private apiService: RequestService) { }

  public createSafetyActivity(newActivity: ISafetyActivity): Observable<any> {
    return this.apiService.post(HSSEConstants.SAFETY_ACTIVITIES, newActivity);
  }

  public getSafetyActivities(): Observable<any> {
    return this.apiService.get(HSSEConstants.SAFETY_ACTIVITIES);
  }

  public deleteSafetyActivity(activity: ISafetyActivity): Observable<any> {
    return this.apiService.delete(HSSEConstants.SAFETY_ACTIVITIES + activity.id);
  }
}
