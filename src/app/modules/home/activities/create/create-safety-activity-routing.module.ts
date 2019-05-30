import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSafetyActivityComponent } from './create-safety-activity.component';
import { ApiResolverService } from 'src/app/core/resolvers/api-resolver.service';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CreateSafetyActivityComponent,
        pathMatch: 'full',
        resolve: {
            questions: ApiResolverService
        },
        data: {
            view: HSSEConstants.SAFETY_ACTIVITIES_VIEW,
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateSafetyActivityRoutingModule { }
