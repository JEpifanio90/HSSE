import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { IEnvironmentalIndicator } from 'src/app/shared/models/environmental-indicator.interface';
import { HSSEConstants } from 'src/app/shared/utils/hsse.constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { IEnvironmentalStats } from 'src/app/shared/models/environmental-stats.interface';

@Component({
  selector: 'hsse-show-indicator',
  templateUrl: './show-indicator.component.html',
  styleUrls: ['./show-indicator.component.scss']
})
export class ShowIndicatorComponent {
  public indicators: Array<IEnvironmentalIndicator> = [];
  public indicatorsView: string = HSSEConstants.ENVIRONMENTAL_INDICATORS_VIEW;
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
          '#9C27B0',
          '#673AB7'
        ],
        label: 'Indicators'
      }
    ],
    labels: [
      'Total Renewable Electricity Consumed',
      'Total Electricity Consumed',
      'Total Consumed Gas',
      'Total Consumed Water',
      'Total Dangerous Wasted Generated',
      'Total Non Dangerous Wasted Generated',
      'Total Waste Sold',
      'Total To Landfield',
      'Total Waste Recycled'
    ]
  };

  constructor(private acr: ActivatedRoute, private indicatorsService: SessionService, private snackService: MatSnackBar) {
    this.getIndicators();
  }

  private getIndicators(): void {
    this.acr.data.subscribe((data: { stats: IEnvironmentalStats }) => {
      this.graphData.datasets[0].data = [
        data.stats.totalRenewableElectricityConsumed,
        data.stats.totalElectricityConsumed,
        data.stats.totalConsumedGas,
        data.stats.totalConsumedWater,
        data.stats.totalDangerousWasteGenerated,
        data.stats.totalNonDangerousWasteGenerated,
        data.stats.totalWasteSold,
        data.stats.totalToLandfield,
        data.stats.totalWasteRecycled
      ];
    });
  }
}
