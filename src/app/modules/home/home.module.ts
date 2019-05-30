import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IndicatorsService } from 'src/app/core/http/indicators/indicators.service';
import { ReportsService } from 'src/app/core/http/reports/reports.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [IndicatorsService, ReportsService],
  exports: [HomeComponent]
})
export class HomeModule { }
