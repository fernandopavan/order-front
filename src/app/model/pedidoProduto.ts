import { Produto } from './produto';
import { Pedido } from './pedido';

export interface PedidoProduto {
    id: number;
    produto: Produto;
    pedido: Pedido;
    quantidade: number;
}
