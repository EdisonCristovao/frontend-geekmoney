import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pessoa } from '../model/Pessoa';

@Injectable()
export class PessoaService {

  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    const url = this.baseUrl + 'pessoas';
    return this.http.get(url)
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
