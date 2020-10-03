import { Produto } from './produto';

export class ProdutoPage {
    content: Produto[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    first: boolean;
    sort: string;
    numberOfElements: number;
}
