import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowReportComponent } from './show-report.component';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: ShowReportComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowReportRoutingModule { }
