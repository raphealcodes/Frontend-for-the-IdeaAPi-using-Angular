import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppIdeaState, getAllSelectedId } from '../../state/index';
import { Store } from '@ngrx/store';
import { LoadIdea } from '../../state/idea.action';
import { Idea } from '../../../../models/idea.model';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.css']
})
export class SelectedIdeaComponent implements OnInit, OnDestroy {
subscription$: Subscription;
idea: Idea;
  constructor(private store: Store<AppIdeaState>) { }

  ngOnInit() {

this.subscription$ = this.store.select(getAllSelectedId).subscribe(val => this.idea = val);
  }

ngOnDestroy() {
  this.subscription$.unsubscribe();
}

}
