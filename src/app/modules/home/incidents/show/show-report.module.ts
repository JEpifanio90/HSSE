import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { ShowReportComponent } from './show-report.component';
import { CommonModule } from '@angular/common';
import { ShowReportRoutingModule } from './show-report-routing.module';

@NgModule({
    declarations: [ShowReportComponent],
    imports: [CommonModule, MatButtonModule, MatPaginatorModule, MatTableModule, ShowReportRoutingModule],
    exports: [ShowReportComponent],
    providers: []
})

export class ShowReportModule { }
