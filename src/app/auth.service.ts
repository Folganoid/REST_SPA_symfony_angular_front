import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);


    return this.http.post('http://127.0.0.1:8000/api/login_check', body, {headers: headers})
        .map((response: Response) => {
          const token = response.json() && response.json().token;
          if (token) {
            this.token = token;
            localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

            return true;
          }
          else {
            return false;
          }
      }).catch(this.handelError);
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handelError(error: Response) {
    return Observable.throw(error.json() || 'server error');
  }

}
