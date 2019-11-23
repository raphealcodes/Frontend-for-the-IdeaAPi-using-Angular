import { User } from './user-model';


export interface Idea {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  description: string;
  author: User;

}

export interface IdeaDTO {
  id?: string;
  idea: string;
  description: string;
}
