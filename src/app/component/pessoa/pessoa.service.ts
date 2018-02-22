import { Pessoa } from './../../model/Pessoa';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

@Injectable()
export class PessoaService {

  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = environment.apiUrl;
  }

  headers() {
    const headers: Headers = new Headers();
    headers.append('Authorization','Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return {headers};
  }

  consultar(): Promise<any> {
    
    const url = this.baseUrl + 'pessoas';
    return this.http.get(url , this.headers())
      .toPromise()
      .then( resp => resp.json()
      )
  }

  consultarPorId(id: Number): Promise<any> {
    const url = this.baseUrl + `pessoas/${id}` ;
    return this.http.get(url, this.headers())
      .toPromise()
      .then( resp => resp.json()
      )
  }

  remove(id: number): Promise<any> {
    const url = this.baseUrl + `pessoas/${id}` ;
    return this.http.delete(url, this.headers())
      .toPromise()
      .then(()=> null)
  }

  salvar(pessoa: Pessoa): Promise<any> {
    const url = this.baseUrl + `pessoas`;
    return this.http.post(url, pessoa, this.headers())
      .toPromise()
      .then(() => null)
  }

  editar(pessoa: Pessoa): Promise<any> {
    const url = this.baseUrl + `pessoas/${pessoa.codigo}` ;
    return this.http.put(url, pessoa, this.headers()).toPromise()
    .then(() => null)
  }
}
