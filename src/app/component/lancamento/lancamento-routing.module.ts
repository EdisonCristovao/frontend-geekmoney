import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaLancamentoComponent } from './busca-lancamento/busca-lancamento.component';
import { CadastroLancamentoComponent } from './cadastro-lancamento/cadastro-lancamento.component';

const APP_ROUTES: Routes = [
  { path: 'lancamento', component: BuscaLancamentoComponent},
  { path: 'lancamento/cadastrar', component: CadastroLancamentoComponent}
]

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
