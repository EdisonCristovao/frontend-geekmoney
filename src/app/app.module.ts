import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { routing } from './routing/app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './component/pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroLancamentoComponent } from './component/lancamento/cadastro-lancamento/cadastro-lancamento.component';
import { GridLancamentoComponent } from './component/lancamento/grid-lancamento/grid-lancamento.component';
import { BuscaLancamentoComponent } from './component/lancamento/busca-lancamento/busca-lancamento.component';
import { BuscaPessoaComponent } from './component/pessoa/busca-pessoa/busca-pessoa.component';
import { GridPessoaComponent } from './component/pessoa/grid-pessoa/grid-pessoa.component';
import { NavbarComponent } from './component/template/navbar/navbar.component';
import { PessoaService } from './services/pessoa.service';



@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent,
    CadastroLancamentoComponent,
    GridLancamentoComponent,
    BuscaLancamentoComponent,
    BuscaPessoaComponent,
    GridPessoaComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
