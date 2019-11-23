import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppUserState, getAllUserId } from '../../state/index';
import { User } from '../../../../models/user-model';

@Component({
  selector: 'app-selected-users',
  templateUrl: './selected-users.component.html',
  styleUrls: ['./selected-users.component.css']
})
export class SelectedUsersComponent implements OnInit, OnDestroy {
subscription$: Subscription;

user: User;
  constructor(private store: Store<AppUserState>) { }

  ngOnInit() {
    this.subscription$ = this.store.select(getAllUserId).subscribe(val => this.user = val);
  }

  ngOnDestroy() {
this.subscription$.unsubscribe();
  }

}
