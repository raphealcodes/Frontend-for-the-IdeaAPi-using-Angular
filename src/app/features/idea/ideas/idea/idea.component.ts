import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Idea } from '../../../../models/idea.model';
import { AppIdeaState } from '../../state/index';
import { DeleteIdea, LoadIdea } from '../../state/idea.action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  @Input()
idea: Idea;

@Input()
displayOptions: boolean = false;

@Output()
Delete: EventEmitter<void> = new EventEmitter();

  constructor(private store: Store<AppIdeaState>, private router: Router) { }

  ngOnInit() {
  }


}
