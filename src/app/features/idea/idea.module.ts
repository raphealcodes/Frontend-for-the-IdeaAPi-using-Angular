import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas/ideas.component';
import { UIModule } from '../../ui.module';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IdeaEffect } from './state/idea.effect';
import { IdeaComponent } from './ideas/idea/idea.component';
import { SelectedIdeaComponent } from './ideas/selected-idea/selected-idea.component';
import { Ideareducer } from './state/index';
import { IdeaResolver } from './idea.resolver';
import { UUIDGuard } from '../../services/uuid.guard';
import { NewIdeaComponent } from './ideas/new-idea/new-idea.component';
import { NewIdeaAddComponent } from './ideas/new-idea-add/new-idea-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditIdeaComponent } from './ideas/edit-idea/edit-idea.component';
import { UpdateIdeaComponent } from './ideas/update-idea/update-idea.component';





const routes: Routes = [{path: '', component: IdeasComponent},
{path: 'new', component: NewIdeaComponent},
{path: ':id', component: SelectedIdeaComponent, resolve: {data: IdeaResolver}, canActivate: [UUIDGuard]},
{path: ':id/edit', component: EditIdeaComponent, resolve: {data: IdeaResolver}}];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent,
     NewIdeaComponent, NewIdeaAddComponent, EditIdeaComponent, UpdateIdeaComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ideas', Ideareducer),
    EffectsModule.forFeature([IdeaEffect]),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [IdeaResolver]
})
export class IdeaModule { }
