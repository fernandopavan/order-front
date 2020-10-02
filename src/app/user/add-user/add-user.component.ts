import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DATE_LOCALE, DateAdapter } from '@angular/material';
import { PessoaFisicaService } from '../../service/pessoa-fisica.service';
import Swal from 'sweetalert2';
import { CustomDateAdapter } from 'src/app/custom.date.adapter';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class AddUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private pessoaFisicaService: PessoaFisicaService) { }

  addForm: FormGroup;
  minDate = new Date(1900, 1, 1);
  date: any;

  validationMessages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório.' }
    ],
    dataNascimento: [
      { type: 'required', message: 'Data nascimento é obrigatório.' },
    ],
    naturalidade: [
      { type: 'maxlength', message: 'Naturalizade deve possuir no máximo 50 caracteres.' },
    ],
    nacionalidade: [
      { type: 'maxlength', message: 'Naturalizade deve possuir no máximo 50 caracteres.' },
    ],
    cpf: [
      { type: 'required', message: 'CPF é obrigatório. Somente Nº' },
    ],
    senha: [
      { type: 'required', message: 'Senha é obrigatória.' },
    ],
    perfis: [
      { type: 'required', message: 'É obrigatório selecionar um tipo de perfil.' },
    ]
  };

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.addForm.value.dataNascimento = new Date(this.addForm.value.dataNascimento).toISOString().slice(0, 10);
    this.pessoaFisicaService.create(this.addForm.value)
      .subscribe(data => {
        this.resetFields();
        Swal.fire('Sucesso!', 'Pessoa física criada', 'success');
        this.router.navigate(['list-user']);
      });
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sexo: [''],
      email: [''],
      dataNascimento: ['', Validators.required],
      naturalidade: [''],
      nacionalidade: [''],
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
      perfis: ['', Validators.required]
    });
  }

  resetFields() {
    this.addForm = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      sexo: new FormControl(''),
      email: new FormControl(''),
      dataNascimento: new FormControl('', Validators.required),
      naturalidade: new FormControl(''),
      nacionalidade: new FormControl(''),
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      perfis: new FormControl('', Validators.required),
    });
  }

}
