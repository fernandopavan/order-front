import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PedidoService } from '../../service/pedido.service';

@Injectable()
export class EditPedidoResolver implements Resolve<any> {

  constructor(public pedidoService: PedidoService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      const id = route.paramMap.get('id');
      this.pedidoService.getById(id)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    });
  }
}
