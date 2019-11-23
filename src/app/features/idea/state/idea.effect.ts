import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { LoadIdeas, IdeaActionTypes, LoadIdeasSuccess,
    LoadIdea, LoadIdeaSuccess, CreateIdea, UpdateIdea, UpdateIdeaSuccess,
     DeleteIdeaSuccess, DeleteIdea } from './idea.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Idea } from '../../../models/idea.model';
import { AddError } from '../../../store/action/error-action';
import { Action } from '@ngrx/store';



@Injectable()
export class IdeaEffect {
    constructor(private api: ApiService, private actions$: Actions) {}

    @Effect()
    loadideas$: Observable<Action> = this.actions$.pipe(
        ofType<LoadIdeas>(IdeaActionTypes.Load_Ideas),
        mergeMap(action => {return this.api.getIdeas().pipe(
            map((idea: Idea[]) => new LoadIdeasSuccess(idea)),
            catchError((err) => of(new AddError(err)))
        ); })
    );

    @Effect()
    loadidea$: Observable<Action> = this.actions$.pipe(
        ofType<LoadIdea>(IdeaActionTypes.Load_Idea),
        mergeMap(action => {return this.api.getIdea(action.payload).pipe(
            map((idea) => new LoadIdeaSuccess(idea)),
            catchError((err) => of(new AddError(err)))
        ); })
    );

    @Effect()
    createidea$: Observable<Action> = this.actions$.pipe(
        ofType<CreateIdea>(IdeaActionTypes.Create_Idea),
        mergeMap(action => {return this.api.createIdea(action.payload).pipe(
            map((idea) => new LoadIdeaSuccess(idea)),
            catchError((err) => of(new AddError(err)))
        ); })
    );

    @Effect()
    updateidea$: Observable<Action> = this.actions$.pipe(
        ofType<UpdateIdea>(IdeaActionTypes.Update_Idea),
        mergeMap(action => {return this.api.updateIdea(action.payload).pipe(
            map(() => new UpdateIdeaSuccess({id: action.payload.id, changes: action.payload })),
            catchError((err) => of(new AddError(err)))
        ); })
    );

    @Effect()
    deleteidea$: Observable<Action> = this.actions$.pipe(
        ofType<DeleteIdea>(IdeaActionTypes.Delete_Idea),
        mergeMap(action => {return this.api.deleteIdea(action.payload).pipe(
            map(() => new DeleteIdeaSuccess(action.payload)),
            catchError((err) => of(new AddError(err)))
        ); })
    );
}
