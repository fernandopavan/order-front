import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { first } from 'rxjs/operators';
import { PessoaFisica } from '../../model/pessoaFisica';
import { PessoaFisicaService } from '../../service/pessoa-fisica.service';
import Swal from 'sweetalert2';
import { CustomDateAdapter } from 'src/app/custom.date.adapter';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
    providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class EditUserComponent implements OnInit {

  pessoaFisica: PessoaFisica;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  validationMessages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório.' }
    ],
    email: [
      { type: 'required', message: 'E-mail é obrigatório.' },
    ],
    perfis: [
      { type: 'required', message: 'É obrigatório selecionar um tipo de perfil.' },
    ]
  };

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      if (data) {
        this.pessoaFisica = data;
        this.pessoaFisica.id = data.id;
        this.createForm();
      }
    });
  }

  createForm() {
    let perfis = this.pessoaFisica.perfis.includes('ADMIN') ? ['0'] : ['1'];
    if (this.pessoaFisica.perfis.includes('ADMIN') && this.pessoaFisica.perfis.includes('PESSOA_FISICA')) {
      perfis = ['0', '1'];
    }

    this.editForm = this.formBuilder.group({
      id: [this.pessoaFisica.id],
      nome: [this.pessoaFisica.nome, Validators.required],
      email: [this.pessoaFisica.email, Validators.required],
      senha: [{ value: '***', disabled: true }],
      perfis: [perfis, Validators.required]
    });
  }

  onSubmit() {
    this.editForm.value.senha = this.pessoaFisica.senha;
    this.pessoaFisicaService.update(this.editForm.value)
      .pipe(first())
      .subscribe(response => {
        Swal.fire('Sucesso!', 'Pessoa física atualizada', 'success');
        this.router.navigate(['list-users']);
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
        this.pessoaFisicaService.delete(this.pessoaFisica.id)
          .subscribe(
            response => {
              this.router.navigate(['/list-users']);
              Swal.fire('Sucesso!', 'Pessoa física removida', 'success');
            },
            err => {
              Swal.fire('Erro!', err, 'error');
            }
          );
      }
    });

  }

  cancel() {
    this.router.navigate(['/list-users']);
  }
}
