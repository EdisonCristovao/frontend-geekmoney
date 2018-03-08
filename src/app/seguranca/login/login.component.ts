import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  senha;
  constructor(
    private auth: AuthService) { }

  ngOnInit() {
  }

  logar() {
    this.auth.login(this.login, this.senha)
    .then( () =>{
    }) 
  }
}
