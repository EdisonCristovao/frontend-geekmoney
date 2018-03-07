import { PessoaModule } from './component/pessoa/pessoa.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { JwtHelper } from 'angular2-jwt';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { ToastyModule } from 'ng2-toasty';


import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './component/pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroLancamentoComponent } from './component/lancamento/cadastro-lancamento/cadastro-lancamento.component';
import { BuscaLancamentoComponent } from './component/lancamento/busca-lancamento/busca-lancamento.component';
import { BuscaPessoaComponent } from './component/pessoa/busca-pessoa/busca-pessoa.component';
import { GridPessoaComponent } from './component/pessoa/grid-pessoa/grid-pessoa.component';
import { NavbarComponent } from './component/template/navbar/navbar.component';
import { LoginComponent } from './seguranca/login/login.component';
import { LancamentoService } from './component/lancamento/lancamento.service';
import { PessoaService } from './component/pessoa/pessoa.service';
import { AuthService } from './seguranca/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { LancamentoModule } from './component/lancamento/lancamento.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    
    AppRoutingModule,
    PessoaModule,
    LancamentoModule,
    
    ToastyModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    SegurancaModule


  ],
  providers: [
    AuthService,
    JwtHelper,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
