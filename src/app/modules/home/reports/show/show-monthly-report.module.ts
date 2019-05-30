import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowMonthlyReportComponent } from './show-monthly-report.component';
import { ShowMonthlyReportsRoutingModule } from './show-monthly-report-routing.module';
import { MetricsModule } from 'src/app/shared/components/metrics/metrics.module';

@NgModule({
  imports: [
    CommonModule,
    ShowMonthlyReportsRoutingModule,
    MetricsModule
  ],
  declarations: [ShowMonthlyReportComponent]
})

export class ShowMonthlyReportModule { }
