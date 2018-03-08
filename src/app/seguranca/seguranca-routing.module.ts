import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const APP_ROUTES = [
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
