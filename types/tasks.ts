export interface ITask {
    id:string,
    text:string,
    isDone?:boolean,
}

export interface ErrorMsg {
    statusCode:number|string;
    msg : string;
}