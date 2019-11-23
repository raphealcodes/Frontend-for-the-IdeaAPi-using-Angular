import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthDTO } from './models/auth-model';

import { AddError } from './store/action/error-action';
import { Observable } from 'rxjs';
import { User } from './models/user-model';
import { AuthService } from './services/auth.service';
import { SetInitialUser } from './state/login-action';
import { AppState } from './app.module';
import { MessageService } from 'primeng/components/common/messageservice';
import { Idea } from './models/idea.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user';
 loaduser$: Observable<User[]>;

  constructor(public authService: AuthService, public store: Store<AppState>, private message: MessageService) { }

  ngOnInit() {
if (this.authService.token) {
  this.store.dispatch(new SetInitialUser()
  );
}

this.store.select(state => state.error).subscribe(val => this.showError(val.error));

}

showError(err) {
  if (err) {
this.message.add({
  severity: 'error',
  summary: 'error message',
  detail: err.message || 'Internal Server Error'
});
  }
}


}
