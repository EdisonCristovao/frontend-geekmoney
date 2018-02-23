import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-lancamento',
  templateUrl: './busca-lancamento.component.html',
  styleUrls: ['./busca-lancamento.component.css']
})
export class BuscaLancamentoComponent implements OnInit {

  lancamentos: any[];
  descricao: string;
  dataVencimentoDe: string = '2017-04-01';
  dataVencimentoAte: string;

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.consultaResumida();
  }

  consultaResumida() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoDe: this.dataVencimentoDe,
      dataVencimentoAte: this.dataVencimentoAte
    }

    this.lancamentoService.consultaResumida(filtro)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
      })
  }

}
