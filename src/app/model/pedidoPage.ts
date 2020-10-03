import { Pedido } from './pedido';

export class PedidoPage {
    content: Pedido[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    first: boolean;
    sort: string;
    numberOfElements: number;
}
