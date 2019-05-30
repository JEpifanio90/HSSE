import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

import { QuestionsComponent } from './questions.component';
import { SidenavService } from '../../services/sidenav.service';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [SidenavService],
  exports: [QuestionsComponent]
})
export class QuestionsModule { }
