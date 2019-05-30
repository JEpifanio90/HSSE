import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ApiResolverService } from 'src/app/core/resolvers/api-resolver.service';
import { StatsResolverService } from 'src/app/core/resolvers/stats-resolver.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
    resolve: {
      questions: ApiResolverService,
      stats: StatsResolverService
    },
    data: {
      view: HSSEConstants.DASHBOARD_VIEW
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [StatsResolverService]
})

export class DashboardRoutingModule { }
