import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSafetyActivityComponent } from './show-safety-activity.component';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: ShowSafetyActivityComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShowSafetyActivityRoutingModule { }
