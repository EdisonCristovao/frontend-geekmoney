import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pessoa } from '../model/Pessoa';

@Injectable()
export class PessoaService {

  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = environment.apiUrl;
    console.log(this.baseUrl);
  }

  consultar(): Promise<any> {
    const headers: Headers = new Headers();
    headers.append('Authorization','Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    const url = this.baseUrl + 'pessoas';
    return this.http.get(url , {headers})
      .toPromise()
      .then( resp => resp.json()
      )
  }

  consultarPorId(id: Number): Promise<any> {
    const url = this.baseUrl + `pessoas/${id}` ;
    return this.http.get(url)
      .toPromise()
      .then( resp => resp.json()
      )
  }

  remove(id: number): Promise<any> {
    const url = this.baseUrl + `pessoas/${id}` ;
    return this.http.delete(url)
      .toPromise()
      .then(()=> null)
  }

  salvar(pessoa: Pessoa): Promise<any> {
    const url = this.baseUrl + `pessoas`;
    return this.http.post(url, pessoa)
      .toPromise()
      .then(() => null)
  }

  editar(pessoa: Pessoa): Promise<any> {
    const url = this.baseUrl + `pessoas/${pessoa.id}` ;
    return this.http.put(url, pessoa).toPromise()
    .then(() => null)
  }
}
