import { Produto } from './produto';
import { Pedido } from './pedido';

export class PedidoProduto {

    id: number;
    produto: Produto;
    pedido: Pedido;
    quantidade: number;
}
