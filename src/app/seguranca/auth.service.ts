import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class AuthService {

  ouathTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper) { 
      this.carregarToken();
    }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','Basic YW5ndWxhcjphbmd1bEBy');
    

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.ouathTokenUrl, body, {headers}).toPromise()
    .then( resp => {
      console.log(resp)
      this.armazenarToken(resp.json().access_token);
    })
    .catch(resp => {
      console.log(resp)
    })
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if(token) {
      this.armazenarToken(token);
    }
  }
}
