import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { ChartModule } from 'primeng/chart';

import { MetricsComponent } from './metrics.component';
import { QuestionsModule } from '../questions/questions.module';

@NgModule({
  declarations: [MetricsComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    QuestionsModule
  ],
  exports: [MetricsComponent]
})

export class MetricsModule { }
