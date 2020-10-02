import { PessoaFisica } from './pessoaFisica';

export interface PessoaFisicaPage {
    content: PessoaFisica[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number ;
    first: boolean ;
    sort: string ;
    numberOfElements: number ;
}
