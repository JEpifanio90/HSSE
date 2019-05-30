import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';

import { CreateMonthlyReportComponent } from './create-monthly-report.component';
import { CreateMonthlyReportsRoutingModule } from './create-monthly-report-routing.module';
import { QuestionsModule } from 'src/app/shared/components/questions/questions.module';

@NgModule({
  declarations: [CreateMonthlyReportComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    CreateMonthlyReportsRoutingModule,
    QuestionsModule,
  ],
  exports: [],
  providers: []
})
export class CreateMonthlyReportModule { }
