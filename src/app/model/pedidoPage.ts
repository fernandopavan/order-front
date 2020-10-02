import { Pedido } from './pedido';

export interface PedidoPage {
    content: Pedido[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    first: boolean;
    sort: string;
    numberOfElements: number;
}
