import { PessoaService } from './pessoa.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaPessoaComponent } from './busca-pessoa/busca-pessoa.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    PessoaRoutingModule
  ],
  declarations: [
    BuscaPessoaComponent,
    CadastroPessoaComponent
  ],
  providers: [
    PessoaService
  ],
  exports: []
})
export class PessoaModule { }
