import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Api_Url } from '../../environments/environment.prod';


@Injectable()
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
    isAdmin: boolean;

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser): Observable<any> {
    return this._http.post(`${Api_Url}api/Account/Register`, regUserData);
    console.log("jib?");
  }

  login(loginInfo): void {
    const str = `grant_type=password&username=${encodeURI(loginInfo.username)}&password=${encodeURI(loginInfo.password)}`;
    console.log(str);
    console.log(Api_Url);
    this._http.post(`${Api_Url}Token`, str).subscribe((token: Token) => {
    this.userInfo = token;
    localStorage.setItem('id_token', token.access_token);
    this.isLoggedIn.next(true);
    this._router.navigate(['/'])
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }
    console.log("what?");

    return this._http.get(`${Api_Url}api/Account/UserInfo`, { headers: this.setHeader() });
    console.log("are?");
  }

  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this._http.post(`${Api_Url}api/Account/Logout`, { headers: this.setHeader() });
    this._router.navigate(['/home-not-logged'])
  }
  private setHeader(): HttpHeaders {
    const x = new HttpHeaders({ 'Content-Type': 'application/json' });
    x.set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    return x
  }
  addRolesToUser = function(user, cb) {
    if(user.username == ['administrator']) {
      cb(this.auth.isAdmin =true, ['administrator']); 
    } else {
      cb(null, ['user']);
    }
    };
}
