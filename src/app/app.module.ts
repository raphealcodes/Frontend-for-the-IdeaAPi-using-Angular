import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UIModule } from './ui.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomSerilazer, RouterStateUrl } from './store/router';
import { RouterStateSerializer, StoreRouterConnectingModule, RouterReducerState, routerReducer } from '@ngrx/router-store';
import { LoginsComponent } from './logins/logins.component';
import { AuthState } from './state/login-reducer';
import { AuthReducer } from './state/login-reducer';
import { AuthEffect } from './state/login-effects';
import { ErrorState, ErrorReducer } from './store/reducers/error-reducer';
import { UUIDGuard } from './services/uuid.guard';
import { IdeasComponent } from './features/idea/ideas/ideas.component';
import { IdeaComponent } from './features/idea/ideas/idea/idea.component';


export interface AppState {
  auth: AuthState;
  error: ErrorState;
  route: RouterReducerState<RouterStateUrl>;
}

export const reducer: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  error: ErrorReducer,
  route: routerReducer
};

export const effects: any[] = [AuthEffect];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginsComponent,
    IdeasComponent,
    IdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UIModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [AuthService, ApiService,  UUIDGuard, {useClass: CustomSerilazer, provide: RouterStateSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
