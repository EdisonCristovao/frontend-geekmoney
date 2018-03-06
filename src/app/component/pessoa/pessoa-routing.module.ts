import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BuscaPessoaComponent } from './busca-pessoa/busca-pessoa.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

const APP_ROUTES: Routes = [
    { path: 'pessoa', component: BuscaPessoaComponent },
    { path: 'pessoa/cadastrar', component: CadastroPessoaComponent },
    { path: 'pessoa/editar/:id', component: CadastroPessoaComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(APP_ROUTES)
    ],
    exports: [RouterModule]
})

export class PessoaRoutingModule {
}