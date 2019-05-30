export interface ICorrectiveAction {
    action: string;
    due_date: Date;
    ehhs_leader: number;
    manager: number;
    other_participants: string;
    status: string;
    supervisor: number;
    created_by: number;
}
