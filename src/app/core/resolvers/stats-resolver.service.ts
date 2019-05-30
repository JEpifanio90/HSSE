import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { UtilsService } from '../http/utils/utils.service';
import { IEnvironmentalStats } from 'src/app/shared/models/environmental-stats.interface';
import { IMonthlyStats } from 'src/app/shared/models/monthly-stats.interface';
import { IDashboard } from 'src/app/shared/models/dashboard.interface';


@Injectable({
  providedIn: 'root'
})
export class StatsResolverService implements Resolve<any> {

  constructor(private utilService: UtilsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEnvironmentalStats | IMonthlyStats | IDashboard> | Observable<never> {
    return this.utilService.getStatsFor(route.data.view, '2019-01-01', '2019-12-01');
  }
}
