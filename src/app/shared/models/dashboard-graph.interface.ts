import { IDGData } from './dashboard-graph-data.interface';

export interface IDGraph {
    title: string;
    subTitle: string;
    icon: string;
    class: string;
    info: {
        labels: Array<string>;
        datasets: Array<IDGData>;
    };
}
