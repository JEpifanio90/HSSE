import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMonthlyReportComponent } from './create-monthly-report.component';
import { ApiResolverService } from 'src/app/core/resolvers/api-resolver.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CreateMonthlyReportComponent,
    pathMatch: 'full',
    resolve: {
      questions: ApiResolverService,
    },
    data: {
      view: HSSEConstants.MONTHLY_REPORTS_VIEW
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateMonthlyReportsRoutingModule { }
