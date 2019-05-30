import { IQuestion } from './question.interface';

export interface IReportQ {
    personalInfoQs: Array<IQuestion>;
    incidentDescriptionQs: Array<IQuestion>;
    eventDescriptionQs: Array<IQuestion>;
    incidentAnalysisQs: Array<IQuestion>;
    approvalsQs: Array<IQuestion>;
}
