import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { IQuestion } from 'src/app/shared/models/question.interface';
import { IDGraph } from 'src/app/shared/models/dashboard-graph.interface';
import { FormsHelper } from 'src/app/shared/utils/forms.helper';
import { SessionService } from 'src/app/shared/services/session.service';
import { IDashboard } from 'src/app/shared/models/dashboard.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
import { UtilsService } from 'src/app/core/http/utils/utils.service';

@Component({
  selector: 'hsse-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public dateRangeForm: FormGroup;
  public dashboardQuestions: Array<IQuestion> = [];
  public dashboardGraphs: Array<IDGraph> = [];
  public formsHelper = new FormsHelper();

  constructor(
    private acr: ActivatedRoute,
    private snackBar: MatSnackBar,
    private statsService: UtilsService
  ) {
    this.setUpQuestions();
  }

  public fillGraphs(graphData: IDashboard): void {
    for (const graph of HSSEConstants.DASHBOARD_GRAPHS) {
      switch (graph.title) {
        case 'Users':
          graph.info.datasets[0].data = graphData.users;
          break;
        case 'Reports':
          graph.info.datasets[0].data = graphData.reports;
          break;
        case 'Indicators':
          graph.info.datasets[0].data = graphData.indicators;
          break;
      }

      this.dashboardGraphs.push(graph);
    }
  }

  public filterGraphs(): void {
    const filterData = this.dateRangeForm.getRawValue();
    filterData.start_date = new Date(filterData.start_date);
    filterData.end_date = new Date(filterData.end_date);
    const startDate = filterData.start_date.getFullYear() + '-' +
      (filterData.start_date.getMonth() + 1) + '-' +
      filterData.start_date.getDate();
    const endDate = filterData.end_date.getFullYear() + '-' +
      (filterData.end_date.getMonth() + 1) + '-' +
      filterData.end_date.getDate();
    this.dashboardGraphs = [];
    this.getDashboardData(startDate, endDate);
  }

  private setUpQuestions() {
    this.acr.data.subscribe((data: { questions: Array<IQuestion>, stats: IDashboard }) => {
      data.questions[0].value = '2018-05-01';
      data.questions[1].value = '2018-12-01';
      this.dashboardQuestions = data.questions;
      this.dateRangeForm = this.formsHelper.toFormGroup(data.questions);
      this.fillGraphs(data.stats);
    });
  }

  private getDashboardData(startDate, endDate) {
    this.statsService.getStatsFor(HSSEConstants.DASHBOARD_VIEW, startDate, endDate).subscribe(
      (graphData: IDashboard) => {
        this.fillGraphs(graphData);
      },
      (exception: string) => {
        this.snackBar.open(exception, 'OK', { duration: 2800 });
      }
    );
  }
}
