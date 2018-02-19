import { Component, OnInit } from '@angular/core';
import { PessoaService } from './../../../services/pessoa.service';

@Component({
  selector: 'app-busca-pessoa',
  templateUrl: './busca-pessoa.component.html',
  styleUrls: ['./busca-pessoa.component.css']
})
export class BuscaPessoaComponent implements OnInit {

  pessoas: any[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.pessoaService.consultar()
    .then(pessoas => {
      this.pessoas = pessoas
    })
  }
  remove(id:number) {
    this.pessoaService.remove(id)
      .then(()=> {
        alert('Pessoa excluida com sucesso');
        this.consultar();
      })
  }

}
