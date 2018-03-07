import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './seguranca/login/login.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '' , redirectTo: 'pessoa', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}