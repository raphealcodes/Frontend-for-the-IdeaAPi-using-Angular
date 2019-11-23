import {Action} from '@ngrx/store';


export enum ErrorActionTypes {
    Add_Error= '[ERROR] Add Error',
    Add_Error_Success = '[Error] Add Error Success',
    Remove_Error= '[ERROR] Remove Error',
}

export class AddError implements Action {
    readonly type = ErrorActionTypes.Add_Error;
    constructor(public payload: any) {}
}

export class AddErrorSuccess implements Action {
    readonly type = ErrorActionTypes.Add_Error_Success;
    constructor(public payload: any) {}
}


export class RemoveError implements Action {
    readonly type = ErrorActionTypes.Remove_Error;
    constructor( ) {}
}


export type ErrorAction= AddError | AddErrorSuccess| RemoveError;
