import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaFisica } from '../../model/pessoaFisica';
import { PessoaFisicaService } from '../../service/pessoa-fisica.service';
import { PessoaFisicaPage } from 'src/app/model/pessoaFisicaPage';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  searchValue = '';
  pessoasFisicas: PessoaFisica[] = [];
  pagePessoaFisica: PessoaFisicaPage;
  selectedPage = 0;

  constructor(
    private router: Router,
    private pessoaFisicaService: PessoaFisicaService
  ) { }

  ngOnInit() {
    this.getPagePessoaFisica(0);
  }

  viewDetails(item) {
    this.router.navigate(['/edit-user/' + item.id]);
  }

  searchByName() {
    // let value = this.searchValue.toLowerCase();
    if (this.searchValue == null) {
      this.ngOnInit();
      return;
    }

    this.pessoaFisicaService.findByName(this.searchValue)
      .subscribe(result => {
        this.pessoasFisicas = result;
      });
  }

  getPagePessoaFisica(page: number): void {
    this.pessoaFisicaService.findAll(page)
      .subscribe(response => {
        this.pagePessoaFisica = response;
        this.pessoasFisicas = response.content;
      });
  }

  onSelect(page: number): void {
    this.selectedPage = page;
    this.getPagePessoaFisica(page);
  }

}
