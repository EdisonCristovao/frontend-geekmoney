import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { Pessoa } from './../../model/Pessoa';

@Injectable()
export class PessoaService {

  baseUrl: string;

  constructor(private http: AuthHttp) {
    this.baseUrl = environment.apiUrl;
  }

  consultar(): Promise<any> {
    
    const url = this.baseUrl + 'pessoas';
    return this.http.get(url)
      .toPromise()
      .then( resp => resp.json()
      ).catch(resp => console.log(resp));
  }

  consultarPorId(id: Number): Promise<any> {
    const url = this.baseUrl + `pessoas/${id}` ;
    return this.http.get(url)
      .toPromise()
      .then( resp => resp.json()
      ).catch (resp =>{

      })
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
    const url = this.baseUrl + `pessoas/${pessoa.codigo}` ;
    return this.http.put(url, pessoa).toPromise()
    .then(() => null)
  }
}
