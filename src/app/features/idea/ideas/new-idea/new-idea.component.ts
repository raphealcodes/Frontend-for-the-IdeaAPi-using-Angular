import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppIdeaState } from '../../state/index';
import { IdeaDTO } from '../../../../models/idea.model';
import { CreateIdea } from '../../state/idea.action';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  constructor(public store: Store<AppIdeaState>) { }

  ngOnInit() {
  }

 submit(e: IdeaDTO) {
   this.store.dispatch(new CreateIdea(e));
 }

}
