import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppIdeaState, getAllSelectedId } from '../../state/index';
import { Store } from '@ngrx/store';
import { Idea } from '../../../../models/idea.model';
import { UpdateIdea } from '../../state/idea.action';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.css']
})
export class EditIdeaComponent implements OnInit, OnDestroy {
subscription$: Subscription;
idea: Idea;
  constructor(private store: Store<AppIdeaState>) { }

  ngOnInit() {
    this.subscription$ = this.store.select(getAllSelectedId).subscribe(val => this.idea = val);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  submit(e: Idea) {
    this.store.dispatch(new UpdateIdea(e));
  }

}
