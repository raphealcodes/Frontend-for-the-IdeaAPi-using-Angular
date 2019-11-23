import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Idea, IdeaDTO } from '../models/idea.model';
import { User } from '../models/user-model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = environment.api_server + '/auth/api';
  constructor(private http: HttpClient, private auth: AuthService) { }

  private request(method: string, endpoint: string, body?: any): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this.http.request(method, url, { body, headers: { authorization: `Bearer ${this.auth.token}` } });
  }

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `users?page=${page}` : 'users';
    return this.request('GET', endpoint);
  }

  getUser(username: string): Observable<User> {
    return this.request('GET', `users/${username}`);
  }

  getIdeas(page?: number): Observable<Idea[]> {
    const endpoint = page ? `ideas?page=${page}` : 'ideas';
    return this.request('GET', endpoint);
  }

  getNewestIdeas(page?: number): Observable<Idea[]> {
    const endpoint = page ? `ideas/newest?page=${page}` : 'ideas/newest';
    return this.request('GET', endpoint);
  }

  getIdea(id: string): Observable<Idea> {
    return this.request('GET', `ideas/${id}`);
  }

  createIdea(data: IdeaDTO): Observable<Idea> {
    return this.request('POST', `ideas/`, data);
  }

  updateIdea(data: Partial<IdeaDTO>): Observable<Idea> {
    return this.request('PUT', `ideas/${data.id}`, data);
  }

  deleteIdea(id: string): Observable<Idea> {
    return this.request('DELETE', `ideas/${id}`);
  }

}


