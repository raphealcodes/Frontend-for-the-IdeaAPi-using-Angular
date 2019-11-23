import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadIdeas, LoadIdea, DeleteIdea } from '../state/idea.action';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Idea } from '../../../models/idea.model';
import { AppIdeaState, getAllIdeas } from '../state/index';
import { User } from '../../../models/user-model';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit, OnDestroy {
ideas: Observable<Idea[]>;
auth$: Subscription;
currentUser: User;
  constructor(public store: Store<AppIdeaState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store.select(getAllIdeas);
    this.auth$ = this.store.select(state => state.auth.users).subscribe(val => this.currentUser = val);
  }

  ngOnDestroy() {
    this.auth$.unsubscribe();
  }

  delete(id: string) {
    this.store.dispatch(new DeleteIdea(id));
  }


}
