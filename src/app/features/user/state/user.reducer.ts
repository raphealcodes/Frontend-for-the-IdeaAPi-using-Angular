import { UserAction } from './user.action';
import * as UserA from './user.action';
import { User } from '../../../models/user-model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface UserState extends EntityState<User> {
    selectedId: string | null;
    loading: boolean;
    loaded: boolean;
}

const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const defaultUser: UserState = {
    selectedId: null,
    ids: [],
    entities: {},
    loading: false,
    loaded: false
};

const initialState = userAdapter.getInitialState(defaultUser);


export function UserReducer(state= initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserA.UserActionTypes.Load_Users: {
            return {...state, loading: true, loaded: false};
        }
        case UserA.UserActionTypes.Load_Users_Success: {
            return userAdapter.addAll(action.payload, {...state, loaded: true});
        }

        case UserA.UserActionTypes.Load_User: {
            return {...state, loading: true, loaded: false};
        }
        case UserA.UserActionTypes.Load_User_Success: {
            return userAdapter.addOne(action.payload, {...state, loaded: true, selectedId: action.payload.id});
        }
        default:
            return state;
    }
}

export const getUsers = userAdapter.getSelectors().selectAll;
export const getUserId = (state: UserState) => state.selectedId;
