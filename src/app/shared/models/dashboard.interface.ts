import { ISafetyActivity } from './safety-activity.interface';
import { IEnvironmentalIndicator } from './environmental-indicator.interface';
import { IMonthlyReport } from './monthly-report.interface';

export interface IDashboard {
    reports: Array<number>;
    users: Array<number>;
    indicators: Array<number>;
    activitiesData: Array<ISafetyActivity>;
    environmentalIndicators: Array<IEnvironmentalIndicator>;
    monthlyData: Array<IMonthlyReport>;
}
