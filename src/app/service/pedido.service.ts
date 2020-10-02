import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Pedido } from '../model/pedido';
import { API_CONFIG } from '../config/api.config';
import { PedidoPage } from '../model/pedidoPage';

@Injectable()
export class PedidoService {

  constructor(private http: HttpClient) { }

  getById(id): Observable<Pedido> {
    return this.http.get<Pedido>(`${API_CONFIG.baseUrl}/pedidos/${id}`);
  }

  create(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${API_CONFIG.baseUrl}/pedidos`, pedido);
  }

  update(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${API_CONFIG.baseUrl}/pedidos/${pedido.id}`, pedido);
  }

  delete(id): Observable<Pedido> {
    return this.http.delete<Pedido>(`${API_CONFIG.baseUrl}/pedidos/${id}`);
  }

  findBy(descricao: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${API_CONFIG.baseUrl}/pedidos/descricao?descricao=${descricao}`);
  }

  findAll(page: number = 0, limit: number = 10): Observable<PedidoPage> {
    return this.http.get<PedidoPage>(`${API_CONFIG.baseUrl}/pedidos/?page=${page}&limit=${limit}`);
  }

}
