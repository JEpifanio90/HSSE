import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';

import { ShowSafetyActivityComponent } from './show-safety-activity.component';
import { ShowSafetyActivityRoutingModule } from './show-safety-activity-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    ShowSafetyActivityRoutingModule
  ],
  declarations: [ShowSafetyActivityComponent]
})

export class ShowSafetyActivityModule { }
