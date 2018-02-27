import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import * as moment from 'moment';
import { ToastyService } from 'ng2-toasty';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-busca-lancamento',
  templateUrl: './busca-lancamento.component.html',
  styleUrls: ['./busca-lancamento.component.css']
})
export class BuscaLancamentoComponent implements OnInit {

  lancamentos: any[];
  descricao: string;
  dataVencimentoDe;
  dataVencimentoAte;

  //pagination
  totalElementos;
  pagina = 1;
  itemPorPagina = 5;

  //modal
  modalExcl: BsModalRef;
  codigoEx;

  constructor(
    private modalService: BsModalService,
    private toastyService: ToastyService,
    private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.consultaResumida();
  }

  mudaPagina(e) {
    this.pagina = e.page;
    this.consultaResumida();
  }

  consultaResumida() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoDe: this.dataVencimentoDe,
      dataVencimentoAte: this.dataVencimentoAte,

      page: this.pagina - 1,
      size: this.itemPorPagina
    }

    this.lancamentoService.consultaResumida(filtro)
      .then(resp => {
        this.lancamentos = resp.content;    
        this.totalElementos = resp.totalElementos;    
      })
  }

  remover(codigo) {
    this.lancamentoService.remover(codigo)
      .then(() =>{
        this.toastyService.success('Excluido com sucesso!!')
        this.consultaResumida();
        this.codigoEx = null;
      })
      .catch(() => {
        alert(`Erro ao excluir o codigo ${codigo}`);
        this.codigoEx = null;
      });
  }

  showModal(codigo, modalRef: TemplateRef<any>) {
    this.modalExcl = this.modalService.show(modalRef, {class: 'modal-sm'});
    this.codigoEx = codigo;
  }

  confirm() {
    this.remover(this.codigoEx);
    this.modalExcl.hide();
  }

  decline() {
    this.codigoEx = null;
    this.modalExcl.hide();
  }

}
