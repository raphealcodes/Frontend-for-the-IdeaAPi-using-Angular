import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUserState } from './state/index';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { LoadUser } from './state/user.action';



@Injectable()
export class UserResolver implements Resolve<Subscription> {
    constructor(private store: Store<AppUserState>) {}
    resolve() {
        return this.store.select(state => state.route.state.params.username)
        .pipe(take(1))
        .subscribe(username => this.store.dispatch(new LoadUser(username)));
    }
}
