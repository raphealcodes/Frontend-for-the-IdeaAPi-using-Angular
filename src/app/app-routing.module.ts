import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from './logins/logins.component';



const routes: Routes = [{path: 'auth', component: LoginsComponent},
{path: 'users', loadChildren: '../../src/app/features/user/user.module#UserModule'},
{path: 'idea', loadChildren: '../../src/app/features/idea/idea.module#IdeaModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
