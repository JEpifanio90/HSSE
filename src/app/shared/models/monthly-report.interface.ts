export interface IMonthlyReport {
    no_employees: number;
    no_contractors: number;
    worked_employee_hours: number;
    worked_contractor_hours: number;
    no_reports_overdue: number;
    no_reports_closed: number;
    no_reports_in_progress: number;
    no_reports_open: number;
    month_created: number;
    year_created: number;
}
