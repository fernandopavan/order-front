import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Produto } from '../model/produto';
import { API_CONFIG } from '../config/api.config';
import { ProdutoPage } from '../model/produtoPage';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getById(id): Observable<Produto> {
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produtos/${id}`);
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produtos`, produto);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${API_CONFIG.baseUrl}/produtos/${produto.id}`, produto);
  }

  delete(id): Observable<Produto> {
    return this.http.delete<Produto>(`${API_CONFIG.baseUrl}/produtos/${id}`);
  }

  findBy(descricao: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos/descricao?descricao=${descricao}`);
  }

  // findAllSelect(): Observable<Produto[]> {
  //   return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos`);
  // }

  findAll(page: number = 0, limit: number = 10): Observable<ProdutoPage> {
    return this.http.get<ProdutoPage>(`${API_CONFIG.baseUrl}/produtos/?page=${page}&limit=${limit}`);
  }

}
