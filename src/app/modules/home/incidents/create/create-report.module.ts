import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSnackBarModule, MatStepperModule, MatListModule } from '@angular/material';

import { CreateReportComponent } from './create-report.component';
import { CreateReportRoutingModule } from './create-report-routing.module';
import { QuestionsModule } from 'src/app/shared/components/questions/questions.module';

@NgModule({
    declarations: [CreateReportComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatListModule,
        MatStepperModule,
        MatSnackBarModule,
        CreateReportRoutingModule,
        QuestionsModule
    ],
    exports: [CreateReportComponent],
    providers: []
})

export class CreateReportModule { }
