import { ErrorAction, ErrorActionTypes, AddError, RemoveError } from '../action/error-action';
import * as fromErrorAction from '../action/error-action';



export interface ErrorState {
    error: any;
}


export const initialState: ErrorState = {
    error: null
};


export const ErrorReducer: (state: ErrorState, action: ErrorAction) => ErrorState =
(state= initialState, action: ErrorAction) => {
    switch (action.type) {
        case fromErrorAction.ErrorActionTypes.Add_Error: {
            return { ...state};
        }
        case fromErrorAction.ErrorActionTypes.Add_Error_Success: {
            return { ...state, error: action.payload};
        }
        case fromErrorAction.ErrorActionTypes.Remove_Error: {
            return { ...state, error: null };
        }
        default:
        return state;
    }
};
