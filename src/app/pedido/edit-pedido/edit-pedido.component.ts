import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { first } from 'rxjs/operators';
import { Pedido } from '../../model/pedido';
import { PedidoService } from '../../service/pedido.service';
import Swal from 'sweetalert2';
import { CustomDateAdapter } from 'src/app/custom.date.adapter';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-edit-pedido',
  templateUrl: './edit-pedido.component.html',
  styleUrls: ['./edit-pedido.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class EditPedidoComponent implements OnInit {

  pedido: Pedido;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  validationMessages = {
    descricao: [
      { type: 'required', message: 'Descrição é obrigatório.' },
      { type: 'maxlength', message: 'Descrição deve possuir entre 3 e 120 caracteres.' }
    ]
  };

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      if (data) {
        this.pedido = data;
        this.pedido.id = data.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      id: [this.pedido.id],
      descricao: [this.pedido.descricao, Validators.required],
      desconto: [this.pedido.desconto],
      fechado: [this.pedido.fechado],
      pedidoProdutos: [this.pedido.pedidoProdutos],
    });
  }

  onSubmit() {
    this.pedidoService.update(this.editForm.value)
      .pipe(first())
      .subscribe(response => {
        Swal.fire('Sucesso!', 'Pedido atualizado', 'success');
        this.router.navigate(['list-pedidos']);
      },
        error => { });
  }

  delete() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!'
    }).then((result) => {
      if (result.value) {
        this.pedidoService.delete(this.pedido.id)
          .subscribe(
            response => {
              this.router.navigate(['/list-pedidos']);
              Swal.fire('Sucesso!', 'Pedido removido', 'success');
            },
            err => {
              Swal.fire('Erro!', err, 'error');
            }
          );
      }
    });

  }

  cancel() {
    this.router.navigate(['/list-pedidos']);
  }
}
