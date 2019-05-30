import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '../request.service';
import { IReport } from 'src/app/shared/models/report.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
import { IMonthlyReport } from 'src/app/shared/models/monthly-report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private apiService: RequestService) { }

  public createReport(newReport: IReport): Observable<any> {
    return this.apiService.post(HSSEConstants.REPORTS, newReport);
  }

  public createMonthlyReport(monthlyReport: IMonthlyReport): Observable<any> {
    return this.apiService.post(HSSEConstants.MONTHLY_REPORTS, monthlyReport);
  }

  public getReports(): Observable<any> {
    return this.apiService.get(HSSEConstants.REPORTS);
  }
}
