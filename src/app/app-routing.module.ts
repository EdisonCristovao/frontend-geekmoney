import { NgModule } from '@angular/core';

import { LoginComponent } from './seguranca/login/login.component';
import { BuscaPessoaComponent } from './component/pessoa/busca-pessoa/busca-pessoa.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BuscaLancamentoComponent } from './component/lancamento/busca-lancamento/busca-lancamento.component';
import { CadastroPessoaComponent } from './component/pessoa/cadastro-pessoa/cadastro-pessoa.component';

const APP_ROUTES: Routes = [
    { path: 'pessoa', component: BuscaPessoaComponent },
    { path: 'lancamento', component: BuscaLancamentoComponent },
    { path: 'pessoa/cadastrar', component: CadastroPessoaComponent },
    { path: 'pessoa/editar/:id', component: CadastroPessoaComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'pessoa'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}