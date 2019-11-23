import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Idea, IdeaDTO } from '../../../../models/idea.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-idea-add',
  templateUrl: './new-idea-add.component.html',
  styleUrls: ['./new-idea-add.component.css']
})
export class NewIdeaAddComponent implements OnInit, OnChanges {
  ideaForm: FormGroup;

  @Input()
  idea: Idea;

  @Output()
  OnSubmit: EventEmitter<IdeaDTO> = new EventEmitter<IdeaDTO>();

  constructor(private fb: FormBuilder, private router: Router) { }



  ngOnInit() {
    this.ideaForm = this.fb.group({
      idea: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnChanges() {
    this.ideaForm = this.fb.group({
      idea: [(this.idea && this.idea.idea), '', [Validators.required]],
      description: [(this.idea && this.idea.description), '', [Validators.required]]
    });

  }


  submit() {
    const submission: IdeaDTO = this.ideaForm.getRawValue();
    this.OnSubmit.emit(submission);
    this.ideaForm.reset();
    this.router.navigate(['\idea']);
  }

}

