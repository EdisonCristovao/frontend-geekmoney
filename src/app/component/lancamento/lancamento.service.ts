import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';


export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: string;
  dataVencimentoAte: string;

  page: number;
  size: number;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl: string;
  
  constructor(private http: Http) { 
    this.lancamentosUrl = environment.apiUrl + 'lancamentos';
  }

  headers() {
    const headers: Headers = new Headers();
    headers.append('Authorization','Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return headers;
  }
  
  consultaResumida(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();

    if(filtro.descricao){
      params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoDe) {
      params.set('dataVencimentoDe', filtro.dataVencimentoDe);
    }

    if(filtro.dataVencimentoAte) {
      params.set('dataVencimentoAte', filtro.dataVencimentoAte);
    }

    const url = `${this.lancamentosUrl}?resumo`;
    return this.http.get(url, { headers : this.headers(), search : filtro})
      .toPromise()
      .then(resp => {
        const retorno = {
          totalElementos: resp.json().totalElements,
          content: resp.json().content
        }
        return retorno;
      });
  }

  remover(codigo) {
    const url = `${this.lancamentosUrl}/${codigo}`;
    return this.http.delete(url, {headers: this.headers()})
      .toPromise()
      .then(() => null);
  }
}
