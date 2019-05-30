import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';

import { ShowIndicatorComponent } from './show-indicator.component';
import { ShowIndicatorRoutingModule } from './show-indicator-routing.module';
import { MetricsModule } from 'src/app/shared/components/metrics/metrics.module';

@NgModule({
    declarations: [ShowIndicatorComponent],
    imports: [
        CommonModule,
        ShowIndicatorRoutingModule,
        MatSnackBarModule,
        MetricsModule
    ],
    exports: [ShowIndicatorComponent],
    providers: []
})

export class ShowIndicatorModule { }
