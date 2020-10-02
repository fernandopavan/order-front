import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';

@Injectable()
export class EditProdutoResolver implements Resolve<any> {

  constructor(public produtoService: ProdutoService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      const id = route.paramMap.get('id');
      this.produtoService.getById(id)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    });
  }
}
