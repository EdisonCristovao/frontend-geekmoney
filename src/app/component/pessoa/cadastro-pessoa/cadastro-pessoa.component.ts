import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Pessoa } from './../../../model/Pessoa';
import { PessoaService } from '../../../services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  estados: string[] = ['Santa catarina', 'Rio Grabde do Sul', 'São paulo'];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  salvarPessoa(pessoa: NgForm) {
    this.pessoaService.salvar(this.pessoa)
    .then(() => {
      alert("pessoa salva com sucesso");
    })
  }
}
