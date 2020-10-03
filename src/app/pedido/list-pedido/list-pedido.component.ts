import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../model/pedido';
import { PedidoService } from '../../service/pedido.service';
import { PedidoPage } from 'src/app/model/pedidoPage';

@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.scss']
})
export class ListPedidoComponent implements OnInit {

  searchValue = '';
  pedidos: Pedido[] = [];
  pagePedido: PedidoPage;
  selectedPage = 0;

  constructor(
    private router: Router,
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.getPagePedido(0);
  }

  viewDetails(item) {
    this.router.navigate(['/edit-pedido/' + item.id]);
  }

  add() {
    this.router.navigate(['/add-pedido']);
  }

  searchBy() {
    // let value = this.searchValue.toLowerCase();
    if (this.searchValue == null) {
      this.ngOnInit();
      return;
    }

    this.pedidoService.findBy(this.searchValue)
      .subscribe(result => {
        this.pedidos = result;
      });
  }

  getPagePedido(page: number): void {
    this.pedidoService.findAll(page)
      .subscribe(response => {
        this.pagePedido = response;
        this.pedidos = response.content;
      });
  }

  onSelect(page: number): void {
    this.selectedPage = page;
    this.getPagePedido(page);
  }

}
