import { Endereco } from './Endereco';

export class Pessoa {

    codigo: number;
    nome: String;
    endereco: Endereco;
    ativo: boolean;

    constructor() {
        this.ativo = true;
        this.endereco = new Endereco();
    }
}