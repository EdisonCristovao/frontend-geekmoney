import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { environment } from './../../environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class AuthService {

  ouathTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private route: Router,
    private toastyService: ToastyService,
    private http: Http,
    private jwtHelper: JwtHelper) { 
      this.ouathTokenUrl = environment.apiUrl + 'oauth/token';
      this.carregarToken();
    }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','Basic YW5ndWxhcjphbmd1bEBy');
    

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.ouathTokenUrl, body, {headers}).toPromise()
    .then( resp => {
      this.armazenarToken(resp.json().access_token);
      this.toastyService.success('Usuario conectado!');
      this.route.navigate(['pessoa'])
    })
    .catch(resp => {
      this.toastyService.error('Erro, Verifique usuario e senha!')
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
