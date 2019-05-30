import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMonthlyReportComponent } from './show-monthly-report.component';
import { StatsResolverService } from 'src/app/core/resolvers/stats-resolver.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ShowMonthlyReportComponent,
    pathMatch: 'full',
    resolve: {
      stats: StatsResolverService,
    },
    data: {
      view: HSSEConstants.MONTHLY_REPORTS_VIEW
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [StatsResolverService]
})
export class ShowMonthlyReportsRoutingModule { }
