import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUser, LoginUser, RegisterUser } from '../state/login-action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
import { AuthDTO } from '../models/auth-model';
import * as fromIndex from '../app.module';
import { AppState } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  regForm: FormGroup;
  users: Observable<User[]>;
  constructor(public fb: FormBuilder, public store: Store<AppState>, private router: Router) { }

  ngOnInit() {
this.regForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }
  login() {
    const submit = this.regForm.getRawValue() as AuthDTO;
    console.log(submit);
    this.store.dispatch(new LoginUser(submit));
    this.regForm.reset();
    this.router.navigate(['/idea']);
  }

  register() {
    const submit = this.regForm.getRawValue() as AuthDTO;
    console.log(submit);
    this.store.dispatch(new RegisterUser(submit));
    this.regForm.reset();
    this.router.navigate(['/idea', 'new']);
  }

}
