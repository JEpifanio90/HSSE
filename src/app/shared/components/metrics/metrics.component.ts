import { Component, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonToggleChange, MatDatepickerInputEvent } from '@angular/material';
import { UIChart } from 'primeng/chart';

import { IQuestion } from '../../models/question.interface';
import { FormsHelper } from '../../utils/forms.helper';
import { HSSEConstants } from '../../utils/hsse.constants';
import { IMonthlyStats } from '../../models/monthly-stats.interface';
import { IEnvironmentalStats } from '../../models/environmental-stats.interface';
import { UtilsService } from 'src/app/core/http/utils/utils.service';


@Component({
  selector: 'hsse-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {
  @Input() graphData: any = {};
  @Input() view: string;
  @ViewChild('chart') chart: UIChart;
  public dateRangeForm: FormGroup;
  public metricsQuestions: Array<IQuestion> = [
    {
      id: 1,
      control_type: 'datepicker',
      disabled: true,
      error: '',
      form: '',
      icon: '',
      input_type: '',
      key: 'metrics_start_date',
      label: 'Start from:',
      options: [],
      required: true,
      value: new Date().toDateString()
    },
    {
      id: 1,
      control_type: 'datepicker',
      disabled: true,
      error: '',
      form: '',
      icon: '',
      input_type: '',
      key: 'metrics_end_date',
      label: 'End Date from:',
      options: [],
      required: true,
      value: new Date().toDateString()
    }
  ];
  public formsHelper = new FormsHelper();

  constructor(private statsService: UtilsService) {
    this.dateRangeForm = this.formsHelper.toFormGroup(this.metricsQuestions);
  }

  public updateGraph(toggleChange: MatButtonToggleChange): void {
    this.chart.type = toggleChange.value;
    this.chart.reinit();
  }

  public filterMetrics(event: MatDatepickerInputEvent<Date>): void {
    const filterData = this.dateRangeForm.getRawValue();
    filterData.metrics_start_date = new Date(filterData.metrics_start_date);
    filterData.metrics_end_date = new Date(filterData.metrics_end_date);
    const startDate = filterData.metrics_start_date.getFullYear() + '-' +
      (filterData.metrics_start_date.getMonth() + 1) + '-' +
      filterData.metrics_start_date.getDate();
    const endDate = filterData.metrics_end_date.getFullYear() + '-' +
      (filterData.metrics_end_date.getMonth() + 1) + '-' +
      filterData.metrics_end_date.getDate();
    this.graphData.datasets.data = [];
    this.statsService.getStatsFor(this.view, startDate, endDate).subscribe(
      (data: any) => {
        if (this.view === HSSEConstants.MONTHLY_REPORTS_VIEW) {
          data = data as IMonthlyStats;
          this.graphData.datasets[0].data = [
            data.totalEmployees,
            data.totalContractors,
            data.totalWorkedEmployeehours,
            data.totalWorkedContractorHours,
            data.totalReportsOverdue,
            data.totalReportsClosed,
            data.totalReportsIP,
            data.totalReportsOpen
          ];
        } else {
          data = data as IEnvironmentalStats;
          this.graphData.datasets[0].data = [
            data.totalRenewableElectricityConsumed,
            data.totalElectricityConsumed,
            data.totalConsumedGas,
            data.totalConsumedWater,
            data.totalDangerousWasteGenerated,
            data.totalNonDangerousWasteGenerated,
            data.totalWasteSold,
            data.totalToLandfield,
            data.totalWasteRecycled
          ];
        }
        this.chart.refresh();
      }
    );
  }
}
