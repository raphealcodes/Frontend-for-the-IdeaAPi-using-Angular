import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './state/user.effects';
import { UIModule } from '../../ui.module';
import { userReducer } from './state/index';
import { SelectedUsersComponent } from './users/selected-users/selected-users.component';
import { UserResolver } from './user.resolver';
import { UserComponent } from './users/user/user.component';




const routes: Routes = [{path: '', component: UsersComponent},
{path: ':username', component: SelectedUsersComponent, resolve: {data: UserResolver}}];

@NgModule({
  declarations: [UsersComponent, SelectedUsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffect]),
    UIModule,

  ],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class UserModule { }
