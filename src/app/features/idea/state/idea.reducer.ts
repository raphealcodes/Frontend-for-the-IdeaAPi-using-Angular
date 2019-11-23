import { Idea } from '../../../models/idea.model';
import { IdeaAction, IdeaActionTypes } from './idea.action';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export interface IdeaState extends EntityState<Idea> {
    selectedId?: string| null;
    loading: boolean;
    loaded: boolean;
    page: number;

}


const ideaAdapter: EntityAdapter<Idea> = createEntityAdapter<Idea>();

const defaultIdea: IdeaState  = {
    selectedId: null,
    entities: {},
    ids: [],
    loading: false,
    loaded: false,
    page: 0
};

const initialState = ideaAdapter.getInitialState(defaultIdea);



export function IdeaReducer(state = initialState, action: IdeaAction): IdeaState {
    switch (action.type) {
        case IdeaActionTypes.Load_Ideas: {
            return {...state, loading: true, loaded: false};
        }
        case IdeaActionTypes.Load_Ideas_Success: {
            return ideaAdapter.addAll(action.payload, {...state, loaded: true});
        }

        case IdeaActionTypes.Load_Idea: {
            return {...state, loading: true, loaded: false };
        }
        case IdeaActionTypes.Load_Idea_Success: {
            return ideaAdapter.addOne(action.payload, {...state, loaded: true, selectedId: action.payload.id});
        }

        case IdeaActionTypes.Create_Idea: {
            return {...state, loading: true, loaded: false };
        }
        case IdeaActionTypes.Create_Idea_Success: {
            return ideaAdapter.addOne(action.payload, {...state, loaded: true});
        }
        case IdeaActionTypes.Update_Idea: {
            return {...state, loading: true, loaded: false };
        }
        case IdeaActionTypes.Update_Idea_Success: {
            return ideaAdapter.updateOne(action.payload, {...state, loaded: true});
        }

        case IdeaActionTypes.Delete_Idea: {
            return {...state, loading: true, loaded: false };
        }
        case IdeaActionTypes.Delete_Idea_Success: {
            return ideaAdapter.removeOne(action.payload, {...state, loaded: true});
        }

        default:
            return state;

    }
}

export const getIdeas = ideaAdapter.getSelectors().selectAll;
export const getSelectedIdea = (state: IdeaState) => state.selectedId;
