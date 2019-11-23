import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthActionTypes, LoginUser, RegisterUser, SetCurrentUser, SetInitialUser } from './login-action';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user-model';
import { RemoveError, AddError } from '../store/action/error-action';
import { AppState } from '../app.module';


@Injectable()
export class AuthEffect {
    constructor(public auth: AuthService,
                public actions$: Actions,
                public store: Store<AppState>) { }




    @Effect()
    setinitialuser$ = this.actions$.pipe(
        ofType<SetInitialUser>(AuthActionTypes.Set_Initial_User),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap(() => {
            return this.auth.whoami().pipe(
                map((user: User) => new SetCurrentUser(user),
                    catchError(err => of(new AddError(err.error))))
            );
        })
    );


    @Effect()
    loginUser$: Observable<Action> = this.actions$.pipe(
        ofType<LoginUser>(AuthActionTypes.Login_User),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap((action: LoginUser) => this.auth.auth('login', action.payload).pipe(
            map((user: User) => new SetCurrentUser(user)),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    registerUser$: Observable<any> = this.actions$.pipe(
        ofType<RegisterUser>(AuthActionTypes.Register_User),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap((action: RegisterUser) => this.auth.auth('register', action.payload).pipe(
            map((user: User) => new SetCurrentUser(user)),
            catchError((err) => of(new AddError(err.error))))
        )
    );
}
