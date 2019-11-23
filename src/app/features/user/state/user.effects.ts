import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ApiService } from '../../../services/api.service';
import { Observable, of } from 'rxjs';
import { LoadUsers, UserActionTypes, LoadUsersSuccess, LoadUser, LoadUserSuccess } from './user.action';
import { mergeMap, catchError, map, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { User } from '../../../models/user-model';
import { AddError, RemoveError } from '../../../store/action/error-action';
import { AppState } from '../../../app.module';




@Injectable()
export class UserEffect {
    constructor(public actions$: Actions, public api: ApiService, private store: Store<AppState>) {}

    @Effect()
    loadusers$: Observable<Action> = this.actions$.pipe(
        ofType<LoadUsers>(UserActionTypes.Load_Users),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap(action => {return this.api.getUsers().pipe(
            map((user: User[]) => new LoadUsersSuccess(user)),
            catchError(err => of(new AddError(err)))
        ); })
    );

    @Effect()
    loaduser$: Observable<Action> = this.actions$.pipe(
        ofType<LoadUser>(UserActionTypes.Load_User),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap(action => this.api.getUser(action.payload).pipe(
            map((user: User) => new LoadUserSuccess(user)),
            catchError((err) => of(new AddError(err)))
        ))
    );
}
