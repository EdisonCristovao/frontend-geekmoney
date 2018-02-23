import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';


export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: string;
  dataVencimentoAte: string;
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
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoAte).format('YYY-MM-DD'));
    }

    const url = `${this.lancamentosUrl}?resumo`;
    return this.http.get(url, { headers : this.headers(), search : filtro})
      .toPromise()
      .then(resp => resp.json().content );
  }
}
