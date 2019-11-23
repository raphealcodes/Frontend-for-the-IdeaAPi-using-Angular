import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IdeaDTO, Idea } from '../../../../models/idea.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppIdeaState, getAllSelectedId } from '../../state/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateIdea } from '../../state/idea.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-idea',
  templateUrl: './update-idea.component.html',
  styleUrls: ['./update-idea.component.css']
})
export class UpdateIdeaComponent implements OnInit {
@Output()
OnSubmit: EventEmitter<Idea> = new EventEmitter<Idea>();

@Input()
idea: Idea;
  constructor(private fb: FormBuilder, private store: Store<AppIdeaState>, private router: Router) { }
updateIdeaForm: FormGroup;
  ngOnInit() {
    this.updateIdeaForm = this.fb.group({
idea: ['', [Validators.required]],
description: ['', [Validators.required]],
id: [''],
created: [''],
updated: [''],
author: ['']

 });

    const currentId$: Observable<Idea> = this.store.select(getAllSelectedId);
    currentId$.subscribe(currentIdea => { if ( currentIdea) {
      this.updateIdeaForm.patchValue({
        id: currentIdea.id,
           idea: currentIdea.idea,
           created: currentIdea.created,
           description: currentIdea.description,
           updated: currentIdea.updated,
           author: currentIdea.author

      });
    }
    });
  }

  submit() {
    const updateNewIdea: Idea = this.updateIdeaForm.getRawValue();
    this.OnSubmit.emit(updateNewIdea);
    this.updateIdeaForm.reset();
    this.router.navigate(['/idea']);
  }

}
