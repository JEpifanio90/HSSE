export interface IQuestion {
    id: number;
    control_type: string;
    disabled: boolean;
    error: string;
    form: string;
    icon: string;
    input_type: string;
    key: string;
    label: string;
    options: Array<any>;
    required: boolean;
    value: string;
}

export interface ILogin {
    userLoginView: Array<IQuestion>;
    newUserView: Array<IQuestion>;
}
