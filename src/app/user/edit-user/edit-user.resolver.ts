import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PessoaFisicaService } from '../../service/pessoa-fisica.service';

@Injectable()
export class EditUserResolver implements Resolve<any> {

  constructor(public pessoaFisicaService: PessoaFisicaService) { }

  resolve(route: ActivatedRouteSnapshot, ) {

    return new Promise((resolve, reject) => {
      const id = route.paramMap.get('id');
      this.pessoaFisicaService.getById(id)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    });
  }
}
