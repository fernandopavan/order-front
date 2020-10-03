import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DATE_LOCALE, DateAdapter } from '@angular/material';
import { ProdutoService } from '../../service/produto.service';
import Swal from 'sweetalert2';
import { CustomDateAdapter } from 'src/app/custom.date.adapter';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class AddProdutoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private pessoaFisicaService: ProdutoService) { }

  addForm: FormGroup;

  validationMessages = {
    descricao: [
      { type: 'required', message: 'Descrição é obrigatório.' },
      { type: 'maxlength', message: 'Descrição deve possuir entre 3 e 120 caracteres.' }
    ],
    preco: [
      { type: 'required', message: 'Preço é obrigatório.' }
    ]
  };

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.pessoaFisicaService.create(this.addForm.value)
      .subscribe(data => {
        this.resetFields();
        Swal.fire('Sucesso!', 'Produto criado', 'success');
        this.router.navigate(['list-produtos']);
      });
  }

  back() {
    this.router.navigate(['/list-produtos']);
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      servico: [''],
      inativo: ['']
    });
  }

  resetFields() {
    this.addForm = this.formBuilder.group({
      descricao: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      servico: new FormControl(''),
      inativo: new FormControl('')
    });
  }

}
