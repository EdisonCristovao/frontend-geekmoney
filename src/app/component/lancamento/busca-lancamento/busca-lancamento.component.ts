import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-lancamento',
  templateUrl: './busca-lancamento.component.html',
  styleUrls: ['./busca-lancamento.component.css']
})
export class BuscaLancamentoComponent implements OnInit {

  lancamentos: any[];
  page = 1;
  totalElementos;

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.consultaResumida();
  }

  consultaResumida() {
    this.lancamentoService.consultaResumida()
      .then(lancamentos => {
        this.lancamentos = lancamentos;
        this.totalElementos = this.lancamentos.length;
      })
  }

}
