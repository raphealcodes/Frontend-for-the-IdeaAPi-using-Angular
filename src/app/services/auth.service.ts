import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthTypes, AuthDTO } from '../models/auth-model';
import { Observable, of } from 'rxjs';
import { User } from '../models/user-model';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private api: string = environment.api_server + '/auth';
  constructor(private http: HttpClient) { }

auth(authTypes: AuthTypes , data: AuthDTO): Observable<User> {
  return this.http.post<User>(`${this.api}/${authTypes}`, data).pipe(
    mergeMap((user: User) => {
      this.token = user.token;
      return of(user);
    })
  );
}

showAll(): Observable<User[]> {
  return this.http.get<User[]>(`${this.api}/api/users`);
}

whoami(): Observable<User> {
  return this.http.get<User>(`${this.api}/whoami`, {
    headers: { authorization: `Bearer ${this.token}` }
  });
}



register(data: AuthDTO) {
return this.auth('register', data);
}


  get token(): string {
    return localStorage.getItem('ideas_token');
  }

set token(val: string) {
  if (val) {
  localStorage.setItem('ideas_token', val);
  } else {
     localStorage.clear(); }
}
}
