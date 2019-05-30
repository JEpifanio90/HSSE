import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { UtilsService } from '../http/utils/utils.service';
import { ILogin, IQuestion } from 'src/app/shared/models/question.interface';
import { IReportQ } from 'src/app/shared/models/report-q.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService implements Resolve<any> {

  constructor(private utilService: UtilsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ILogin | Array<IQuestion> | IReportQ> | Observable<never> {
    return this.utilService.getDataFor('questions', route.data.view);
  }
}
