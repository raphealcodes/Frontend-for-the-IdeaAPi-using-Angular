import { UserState, UserReducer, getUsers, getUserId } from './user.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import * as Store from '../../../app.module';
import { ErrorReducer } from '../../../store/reducers/error-reducer';
import {  AuthReducer } from '../../../state/login-reducer';


export interface AppUserState extends Store.AppState {
    users: UserState;
}

export const userReducer: ActionReducerMap<AppUserState> = {
    users: UserReducer,
    error: ErrorReducer,
    route: routerReducer,
    auth: AuthReducer
};


export const getUserState = createFeatureSelector<AppUserState>('users');
export const getAllUserState = createSelector( getUserState, (state: AppUserState) => state.users);

export const getUserss = createSelector(getAllUserState, getUsers);
export const getUserIdState = createSelector(getAllUserState, getUserId);
export const getAllUserId = createSelector(getAllUserState, getUserIdState, state => state.entities[state.selectedId]);





