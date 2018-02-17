import { BuscaPessoaComponent } from './../component/pessoa/busca-pessoa/busca-pessoa.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'pessoa', component: BuscaPessoaComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);