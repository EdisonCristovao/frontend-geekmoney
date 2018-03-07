import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoService } from './lancamento.service';
import { CadastroLancamentoComponent } from './cadastro-lancamento/cadastro-lancamento.component';
import { BuscaLancamentoComponent } from './busca-lancamento/busca-lancamento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    PaginationModule.forRoot(),

    LancamentoRoutingModule
  ],
  declarations: [
    CadastroLancamentoComponent,
    BuscaLancamentoComponent
  ],
  providers: [
    LancamentoService
  ],
  exports: [
  ]
})
export class LancamentoModule { }
