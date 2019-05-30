import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowIndicatorComponent } from './show-indicator.component';
import { StatsResolverService } from 'src/app/core/resolvers/stats-resolver.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ShowIndicatorComponent,
    pathMatch: 'full',
    resolve: {
      stats: StatsResolverService
    },
    data: {
      view: HSSEConstants.ENVIRONMENTAL_INDICATORS_VIEW
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [StatsResolverService]
})
export class ShowIndicatorRoutingModule { }
