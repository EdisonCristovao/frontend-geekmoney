export class Pessoa {
    id:number;
    nome: String;
    logradouro: String;
    numero: String;
    complemento: String;
    bairro: String;
    cep: String;
    cidade: String;
    estado: String;
    status: boolean;

    constructor() {
        this.status = true;
    }
}