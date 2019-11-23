import { IdeaState, IdeaReducer, getIdeas, getSelectedIdea } from './idea.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import * as Store from '../../../app.module';
import { AuthState, AuthReducer } from '../../../state/login-reducer';
import { ErrorReducer } from '../../../store/reducers/error-reducer';





export interface AppIdeaState extends Store.AppState {
ideas: IdeaState;

}

export const Ideareducer: ActionReducerMap<AppIdeaState> = {
    ideas: IdeaReducer,
    auth: AuthReducer,
    error: ErrorReducer,
    route: routerReducer
};




export const getIdeaState = createFeatureSelector<AppIdeaState>('ideas');
export const getAllIdeaState = createSelector(getIdeaState, (state: AppIdeaState) => state.ideas);


export const getAllIdeas = createSelector(getAllIdeaState, getIdeas);


export const getFeatureId = createSelector(getAllIdeaState, getSelectedIdea);
export const getAllSelectedId = createSelector(getAllIdeaState, getFeatureId, state => state.entities[state.selectedId]);

export * from './idea.action';
export * from './idea.effect';
export * from './idea.reducer';
