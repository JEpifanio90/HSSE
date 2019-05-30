import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '../request.service';
import { IEnvironmentalIndicator } from 'src/app/shared/models/environmental-indicator.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private apiService: RequestService) { }

  public createIndicator(indicator: IEnvironmentalIndicator): Observable<any> {
    return this.apiService.post(HSSEConstants.ENVIRONMENTAL_INDICATORS, indicator);
  }

  public getIndicators(): Observable<any> {
    return this.apiService.get(HSSEConstants.ENVIRONMENTAL_INDICATORS);
  }

  public deleteIndicator(indicator: IEnvironmentalIndicator): Observable<any> {
    return this.apiService.delete(HSSEConstants.ENVIRONMENTAL_INDICATORS + indicator.id);
  }
}
