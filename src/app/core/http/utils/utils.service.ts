import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '../request.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private apiService: RequestService) { }

  public getStatsFor(view: string, startDate: string, endDate: string): Observable<any> {
    const url: string = HSSEConstants.STATISTICS + '?view=' + view + '&startDate=' + startDate + '&endDate=' + endDate;
    return this.apiService.get(url);
  }

  public getDataFor(section: string, formView?: string): Observable<any> {
    let url = HSSEConstants.PUBLIC_SERVICES + '/?querySection=' + section;
    url += (section === 'questions') ? '&formView=' + formView : '';
    return this.apiService.get(url);
  }

  public getUsers(): Observable<any> {
    return this.apiService.get(HSSEConstants.USERS);
  }
}
