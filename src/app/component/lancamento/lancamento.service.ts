import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentoService {

  lancamentosUrl: String;
  
  constructor(private http: Http) { 
    this.lancamentosUrl = environment.apiUrl + 'lancamentos';
  }

  headers() {
    const headers: Headers = new Headers();
    headers.append('Authorization','Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return {headers};
  }
  
  consultaResumida(): Promise<any> {
    const url = `${this.lancamentosUrl}?resumo`;
    return this.http.get(url, this.headers())
      .toPromise()
      .then(resp => resp.json().content );
  }
}
