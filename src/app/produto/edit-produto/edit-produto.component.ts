import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { first } from 'rxjs/operators';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../service/produto.service';
import Swal from 'sweetalert2';
import { CustomDateAdapter } from 'src/app/custom.date.adapter';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.scss'],
    providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class EditProdutoComponent implements OnInit {

  produto: Produto;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  validationMessages = {
    descricao: [
      { type: 'required', message: 'Descrição é obrigatório.' },
      { type: 'maxlength', message: 'Descrição deve possuir entre 3 e 150 caracteres.' }
    ],
    preco: [
      { type: 'required', message: 'Preço é obrigatório.' }
    ]
  };

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      if (data) {
        this.produto = data;
        this.produto.id = data.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      id: [this.produto.id],
      descricao: [this.produto.descricao, Validators.required],
      preco: [this.produto.preco, Validators.required],
      servico: [this.produto.servico],
      inativo: [this.produto.inativo]
    });
  }

  onSubmit() {
    this.produtoService.update(this.editForm.value)
      .pipe(first())
      .subscribe(response => {
        Swal.fire('Sucesso!', 'Produto atualizado', 'success');
        this.router.navigate(['list-produto']);
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
        this.produtoService.delete(this.produto.id)
          .subscribe(
            response => {
              this.router.navigate(['/list-produto']);
              Swal.fire('Sucesso!', 'Produto removido', 'success');
            },
            err => {
              Swal.fire('Erro!', err, 'error');
            }
          );
      }
    });

  }

  cancel() {
    this.router.navigate(['/list-produto']);
  }
}
