import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  senha;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logar() {
    this.auth.login(this.login, this.senha);
  }
}
