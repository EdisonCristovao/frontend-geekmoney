import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-pessoa',
  templateUrl: './busca-pessoa.component.html',
  styleUrls: ['./busca-pessoa.component.css']
})
export class BuscaPessoaComponent implements OnInit {

  pessoas: any[] = [
    {nome: "Bety linda", cidade: "Real parque", estado: "santa Catarina", status: true},
    {nome: "Edi Junior", cidade: "São josé", estado: "santa Catarina", status: false}];

  constructor() { }

  ngOnInit() {
  }

}
