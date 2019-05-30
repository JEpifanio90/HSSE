import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';

import { CreateIndicatorComponent } from './create-indicator.component';
import { CreateIndicatorRoutingModule } from './create-indicator-routing.module';
import { QuestionsModule } from 'src/app/shared/components/questions/questions.module';

@NgModule({
    declarations: [CreateIndicatorComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        QuestionsModule,
        CreateIndicatorRoutingModule
    ],
    exports: [CreateIndicatorComponent],
    providers: []
})

export class CreateIndicatorModule { }
