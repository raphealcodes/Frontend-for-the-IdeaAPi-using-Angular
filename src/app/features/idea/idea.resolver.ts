import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppIdeaState } from './state/index';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import { LoadIdea } from './state/idea.action';



@Injectable()
export class IdeaResolver implements Resolve<Subscription> {
 constructor(private store: Store<AppIdeaState>) {}
    resolve() {
       return this.store.select(state => state.route.state.params.id)
 .pipe(take(1))
 .subscribe(id => this.store.dispatch(new LoadIdea(id)));
 }
}
