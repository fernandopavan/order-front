import { PedidoProduto } from './pedidoProduto';

export interface Pedido {
    id: number;
    descricao: string;
    desconto: number;
    pedidoProdutos: PedidoProduto[];
    fechado: boolean;
}
