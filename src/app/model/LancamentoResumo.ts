import { TipoLancamento } from './TipoLancamento';
export class  LancamentoResumo {
    
    codigo: Number;
    descricao: String;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: Number;
    tipo: TipoLancamento;
    categoria: String;
    pessoa: String;
    
    constructor() {
        
    }
}