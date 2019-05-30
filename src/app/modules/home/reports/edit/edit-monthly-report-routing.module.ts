import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMonthlyReportComponent } from './edit-monthly-report.component';
// import { AuthGuardService } from '../../../utils/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: EditMonthlyReportComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMonthlyReportsRoutingModule { }
