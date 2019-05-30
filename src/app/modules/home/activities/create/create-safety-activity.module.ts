import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';

import { CreateSafetyActivityComponent } from './create-safety-activity.component';
import { CreateSafetyActivityRoutingModule } from './create-safety-activity-routing.module';
import { QuestionsModule } from 'src/app/shared/components/questions/questions.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    QuestionsModule,
    CreateSafetyActivityRoutingModule
  ],
  declarations: [CreateSafetyActivityComponent]
})
export class CreateSafetyActivityModule { }
