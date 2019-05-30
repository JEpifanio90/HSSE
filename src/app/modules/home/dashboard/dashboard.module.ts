import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { ChartModule } from 'primeng/chart';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { QuestionsModule } from 'src/app/shared/components/questions/questions.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    ChartModule,
    CommonModule,
    FlexLayoutModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    QuestionsModule
  ],
  exports: [],
  providers: []
})
export class DashboardModule { }
