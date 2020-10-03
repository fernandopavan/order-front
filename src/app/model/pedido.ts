import { PedidoProduto } from './pedidoProduto';

export class Pedido {
    id: number;
    descricao: string;
    desconto: number;
    pedidoProdutos: PedidoProduto[];
    fechado: boolean;
}
