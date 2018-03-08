import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './seguranca/login/login.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '' , redirectTo: 'login', pathMatch: 'full'},
];


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}