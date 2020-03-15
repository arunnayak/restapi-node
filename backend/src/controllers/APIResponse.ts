export class APIResponse {
    public Data?: [];
    public Success?: boolean;
    public SuccessMsg?: string;
    public Error?: boolean;
    public ErrorMsg?: string;
    constructor(data: [], success: boolean, successMsg:string, error: boolean, errorMsg: string){
        this.Data = data;
        this.Success = success;
        this.SuccessMsg = successMsg;
        this.Error = error;
        this.ErrorMsg = errorMsg
    }
}