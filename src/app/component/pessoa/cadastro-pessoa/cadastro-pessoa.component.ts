import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { Pessoa } from './../../../model/Pessoa';
import { PessoaService } from '../../../services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  acao: String = 'Cadastro';
  id: Number;

  pessoa: Pessoa = new Pessoa();
  estados: string[] = ['Santa catarina', 'Rio Grabde do Sul', 'São paulo'];

  constructor(private pessoaService: PessoaService,
              private route: Router,
              private activeRoute: ActivatedRoute) { 
                
              }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
                this.defineAcao();
                  
  }

  defineAcao() {
    if(this.id){
      this.pessoaService.consultarPorId(this.id)
      .then(pessoa => this.pessoa = pessoa);
      this.acao = 'Editar'
    }
  }

  salvarPessoa(id: Number = null) {
    if(id) {  
      this.pessoaService.editar(this.pessoa)
      .then(() => {
        alert("Pessoa editada com sucesso");
        this.route.navigate(['pessoa']);
      })
    } else {
      this.pessoaService.salvar(this.pessoa)
      .then(() => {
        alert("pessoa salva com sucesso");
        this.route.navigate(['pessoa']);
      })
    }
  }
}
