import { Action } from '@ngrx/store';
import { Idea, IdeaDTO } from '../../../models/idea.model';
import { Update } from '@ngrx/entity';


export enum IdeaActionTypes {
    Load_Ideas = '[Idea] Load Ideas',
    Load_Ideas_Success = '[Idea] Load Ideas Success',

    Load_Idea = '[Idea] Load Idea',
    Load_Idea_Success = '[Idea] Load Idea Success',

    Create_Idea = '[Idea] Create Idea',
    Create_Idea_Success = '[Idea] Create Idea Success',

    Update_Idea = '[Idea] Update Idea',
    Update_Idea_Success = '[Idea] Update Idea Success',

    Delete_Idea = '[Idea] Delete Idea',
    Delete_Idea_Success = '[Idea] Delete Idea Success',
}


export class LoadIdeas implements Action {
    readonly type = IdeaActionTypes.Load_Ideas;
}

export class LoadIdeasSuccess implements Action {
    readonly type = IdeaActionTypes.Load_Ideas_Success;
    constructor(public payload: Idea[]) {}
}

export class LoadIdea implements Action {
    readonly type = IdeaActionTypes.Load_Idea;
    constructor(public payload: string) {}
}

export class LoadIdeaSuccess implements Action {
    readonly type = IdeaActionTypes.Load_Idea_Success;
    constructor(public payload: Idea) {}
}

export class CreateIdea implements Action {
    readonly type = IdeaActionTypes.Create_Idea;
    constructor(public payload: IdeaDTO) {}
}

export class CreateIdeaSuccess implements Action {
    readonly type = IdeaActionTypes.Create_Idea_Success;
    constructor(public payload: Idea) {}
}

export class UpdateIdea implements Action {
    readonly type = IdeaActionTypes.Update_Idea;
    constructor(public payload: Idea) {}
}

export class UpdateIdeaSuccess implements Action {
    readonly type = IdeaActionTypes.Update_Idea_Success;
    constructor(public payload: Update<Idea>) {}
}

export class DeleteIdea implements Action {
    readonly type = IdeaActionTypes.Delete_Idea;
    constructor(public payload: string) {}
}

export class DeleteIdeaSuccess implements Action {
    readonly type = IdeaActionTypes.Delete_Idea_Success;
    constructor(public payload: string) {}
}




export type IdeaAction = LoadIdeas | LoadIdeasSuccess |
LoadIdea | LoadIdeaSuccess | CreateIdea | CreateIdeaSuccess |
UpdateIdea | UpdateIdeaSuccess |
DeleteIdea | DeleteIdeaSuccess;
