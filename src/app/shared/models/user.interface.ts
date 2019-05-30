export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    token?: string;
    last_login?: Date;
    site: number;
    contractor: Boolean;
}
