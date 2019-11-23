import {Action} from '@ngrx/store';
import { AuthDTO } from '../models/auth-model';
import { User } from '../models/user-model';



export enum AuthActionTypes {
    Load_User = '[Auth] Load User',
    Load_User_Success = '[Auth] Load User Success',
    Login_User= '[AUTH] Login User',
    Login_User_Success = '[AUTH] Login User',
    Register_User = '[AUTH] Register User',
    Set_Initial_User = '[AUTH] Set Initial User',
    Set_Current_User = '[AUTH] Set Current User',
}

export class LoadUser implements Action {
    readonly type = AuthActionTypes.Load_User;
}

export class LoadUserSuccess implements Action {
    readonly type = AuthActionTypes.Load_User_Success;
    constructor(public payload: User) {}
}


export class LoginUser implements Action {
    readonly type = AuthActionTypes.Login_User;
    constructor(public payload: AuthDTO) {}
}


export class RegisterUser implements Action {
    readonly type = AuthActionTypes.Register_User;
    constructor(public payload: AuthDTO) {}
}

export class SetInitialUser implements Action {
readonly type = AuthActionTypes.Set_Initial_User;

}

export class SetCurrentUser implements Action {
    readonly type = AuthActionTypes.Set_Current_User;
    constructor(public payload: any) {}
}


export type AuthAction= LoadUser| LoadUserSuccess | LoginUser |  RegisterUser|SetCurrentUser | SetInitialUser ;
