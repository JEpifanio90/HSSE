import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
import { IMonthlyStats } from 'src/app/shared/models/monthly-stats.interface';

@Component({
  selector: 'hsse-show-monthly-report',
  templateUrl: './show-monthly-report.component.html',
  styleUrls: ['./show-monthly-report.component.scss']
})
export class ShowMonthlyReportComponent {
  public reportsView: string = HSSEConstants.MONTHLY_REPORTS_VIEW;
  public graphData = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB',
          '#F44336',
          '#E91E63',
          '#9C27B0'
        ],
        label: 'Indicators'
      }
    ],
    labels: [
      'Total Employees',
      'Total Contractors',
      'Total Worked Employee Hours',
      'Total Worked Contractor Hours',
      'Total Actions Overdue',
      'Total Actions Closed',
      'Total Actions In Progress',
      'Total Actions Open'
    ]
  };

  constructor(private acr: ActivatedRoute) {
    this.getStatsData();
  }

  private getStatsData(): void {
    this.acr.data.subscribe((data: { stats: IMonthlyStats }) => {
      this.graphData.datasets[0].data = [
        data.stats.totalEmployees,
        data.stats.totalContractors,
        data.stats.totalWorkedEmployeehours,
        data.stats.totalWorkedContractorHours,
        data.stats.totalReportsOverdue,
        data.stats.totalReportsClosed,
        data.stats.totalReportsIP,
        data.stats.totalReportsOpen
      ];
    });
  }
}
