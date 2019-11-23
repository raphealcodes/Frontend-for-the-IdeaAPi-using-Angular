import { User } from '../models/user-model';
import * as fromAction from './login-action';
import { AuthAction } from './login-action';




export interface AuthState  {
    users: User;
}



export const initialState: AuthState = {
users: null
};

export function AuthReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case fromAction.AuthActionTypes.Load_User: {
            return {...state};
        }
        case fromAction.AuthActionTypes.Load_User_Success: {
            return {...state, users: action.payload};
        }
        case fromAction.AuthActionTypes.Login_User: {
            return { ...state };
        }
        case fromAction.AuthActionTypes.Register_User: {
            return { ...state };
        }
        case fromAction.AuthActionTypes.Set_Initial_User: {
            return { ...state };
        }
        case fromAction.AuthActionTypes.Set_Current_User: {
            return {...state, users: action.payload} ;
        }
        default:
            return state;
    }
}

export const getUser = (state: AuthState) => state.users;



