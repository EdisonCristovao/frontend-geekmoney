import { NgModule } from '@angular/core';

import { LoginComponent } from './seguranca/login/login.component';
import { BuscaPessoaComponent } from './component/pessoa/busca-pessoa/busca-pessoa.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BuscaLancamentoComponent } from './component/lancamento/busca-lancamento/busca-lancamento.component';
import { CadastroPessoaComponent } from './component/pessoa/cadastro-pessoa/cadastro-pessoa.component';

const APP_ROUTES: Routes = [
    { path: 'lancamento', component: BuscaLancamentoComponent },
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