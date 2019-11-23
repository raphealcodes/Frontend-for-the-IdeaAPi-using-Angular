import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUsers } from '../state/user.action';
import { Observable } from 'rxjs';
import { User } from '../../../models/user-model';
import { AppUserState, getUserss } from '../state/index';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: Observable<User[]>;

  constructor(private store: Store<AppUserState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.users = this.store.select(getUserss);
  }

}
