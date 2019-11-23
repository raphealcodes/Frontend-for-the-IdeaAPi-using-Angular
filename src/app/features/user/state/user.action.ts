import { Action } from '@ngrx/store';
import { User } from '../../../models/user-model';




export enum UserActionTypes {
    Load_Users = '[User] Load Users',
    Load_Users_Success = '[User] Load Users Success',

    Load_User = '[User] Load User',
    Load_User_Success = '[User] Load User Success'
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.Load_Users;
}

export class LoadUsersSuccess implements Action {
    readonly type = UserActionTypes.Load_Users_Success;
    constructor(public payload: User[]) {}
}

export class LoadUser implements Action {
    readonly type = UserActionTypes.Load_User;
    constructor(public payload: string) {}
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.Load_User_Success;
    constructor(public payload: User) {}
}





export type UserAction = LoadUsers | LoadUsersSuccess | LoadUser | LoadUserSuccess;
