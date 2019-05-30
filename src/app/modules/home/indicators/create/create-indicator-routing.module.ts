import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateIndicatorComponent } from './create-indicator.component';
import { ApiResolverService } from 'src/app/core/resolvers/api-resolver.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CreateIndicatorComponent,
    pathMatch: 'full',
    resolve: {
      questions: ApiResolverService
    },
    data: {
      view: HSSEConstants.ENVIRONMENTAL_INDICATORS_VIEW
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CreateIndicatorRoutingModule { }
