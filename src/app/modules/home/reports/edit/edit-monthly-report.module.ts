import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditMonthlyReportComponent } from './edit-monthly-report.component';
import { EditMonthlyReportsRoutingModule } from './edit-monthly-report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EditMonthlyReportsRoutingModule
  ],
  declarations: [EditMonthlyReportComponent]
})
export class EditMonthlyReportModule { }
