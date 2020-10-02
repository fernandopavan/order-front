import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DATE_LOCALE, DateAdapter } from '@angular/material';
import { PedidoService } from '../../service/pedido.service';
import Swal from 'sweetalert2';
import { CustomDateAdapter } from 'src/app/custom.date.adapter';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class AddPedidoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private pedidoService: PedidoService) { }

  addForm: FormGroup;

  validationMessages = {
    descricao: [
      { type: 'required', message: 'Descrição é obrigatório.' },
      { type: 'maxlength', message: 'Descrição deve possuir entre 3 e 120 caracteres.' }
    ]
  };

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.pedidoService.create(this.addForm.value)
      .subscribe(data => {
        this.resetFields();
        Swal.fire('Sucesso!', 'Pedido criado', 'success');
        this.router.navigate(['list-pedido']);
      });
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      desconto: [''],
      fechado: [''],
      pedidoProdutos: []
    });
  }

  resetFields() {
    this.addForm = this.formBuilder.group({
      descricao: new FormControl('', Validators.required),
      desconto: new FormControl(''),
      fechado: new FormControl(''),
      pedidoProdutos: new FormControl('')
    });
  }

}
