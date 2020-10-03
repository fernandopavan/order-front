import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoPage } from 'src/app/model/produtoPage';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.scss']
})
export class ListProdutoComponent implements OnInit {

  searchValue = '';
  produtos: Produto[] = [];
  pageProduto: ProdutoPage;
  selectedPage = 0;

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.getPageProduto(0);
  }

  viewDetails(item) {
    this.router.navigate(['/edit-produto/' + item.id]);
  }

  add() {
    this.router.navigate(['/add-produto']);
  }

  searchBy() {
    if (this.searchValue == null) {
      this.ngOnInit();
      return;
    }

    this.produtoService.findBy(this.searchValue)
      .subscribe(result => {
        this.produtos = result;
      });
  }

  getPageProduto(page: number): void {
    this.produtoService.findAll(page)
      .subscribe(response => {
        this.pageProduto = response;
        this.produtos = response.content;
      });
  }

  onSelect(page: number): void {
    this.selectedPage = page;
    this.getPageProduto(page);
  }

}
