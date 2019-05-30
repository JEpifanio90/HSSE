import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { IReport } from 'src/app/shared/models/report.interface';
import { ReportsService } from 'src/app/core/http/reports/reports.service';

@Component({
  selector: 'hsse-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.scss'],
  animations: []
})
export class ShowReportComponent implements OnInit {
  dataSource: Array<IReport> = [];
  columnsToDisplay = ['case_number', 'case_type', 'fatality_potential', 'incident_date', 'created_by', 'actions'];
  expandedElement: IReport;

  constructor(private reportService: ReportsService) {}

  public ngOnInit() {
    this.reportService.getReports().subscribe(
      (reports: Array<IReport>) => { this.dataSource = reports; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
  }
}
