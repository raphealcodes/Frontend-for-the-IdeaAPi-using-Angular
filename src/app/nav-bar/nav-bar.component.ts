import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { User } from '../models/user-model';
import { Subscription } from 'rxjs';
import { SetCurrentUser } from '../state/login-action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  username: User;
  auth$: Subscription;
items: MenuItem[] = [
{
  label: 'Home',
  routerLink: '/',
  icon: 'fa fa-home'
},
{
  label: 'Users',
  routerLink: '/users',
  icon: 'fa fa-user'
},

];
  constructor(public authService: AuthService, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.auth$ = this.store.select(state => state.auth.users).subscribe(val => this.username = val);
  }
  ngOnDestroy() {
    this.auth$.unsubscribe();
  }

  onClick() {
    if (this.authService.token) {
      this.authService.token = null;
      this.store.dispatch(new SetCurrentUser(null));
    }
    this.router.navigate(['/auth']);
  }

}
