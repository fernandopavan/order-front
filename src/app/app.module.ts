import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './core/error-interceptor';
import { AuthInterceptorProvider } from './core/auth-interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule,
  MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, DateAdapter
} from '@angular/material';

import { PessoaFisicaService } from './service/pessoa-fisica.service';
import { PedidoService } from './service/pedido.service';
import { ProdutoService } from './service/produto.service';
import { StorageService } from './service/storage.service';
import { AuthService } from './service/auth.service';

import { LoginComponent } from './login/login.component';

// Pessoas
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditUserResolver } from './user/edit-user/edit-user.resolver';

// Pedidos
import { AddPedidoComponent } from './pedido/add-pedido/add-pedido.component';
import { ListPedidoComponent } from './pedido/list-pedido/list-pedido.component';
import { EditPedidoComponent } from './pedido/edit-pedido/edit-pedido.component';
import { EditPedidoResolver } from './pedido/edit-pedido/edit-pedido.resolver';

// Produtos
import { AddProdutoComponent } from './produto/add-produto/add-produto.component';
import { ListProdutoComponent } from './produto/list-produto/list-produto.component';
import { EditProdutoComponent } from './produto/edit-produto/edit-produto.component';
import { EditProdutoResolver } from './produto/edit-produto/edit-produto.resolver';

import { MAT_DATE_LOCALE } from '@angular/material';
import { CustomDateAdapter } from './custom.date.adapter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    AddUserComponent,
    EditUserComponent,
    ListUserComponent,

    AddPedidoComponent,
    EditPedidoComponent,
    ListPedidoComponent,

    AddProdutoComponent,
    EditProdutoComponent,
    ListProdutoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
  ],
  providers: [
    AuthService,
    StorageService,
    PessoaFisicaService,
    PedidoService,
    ProdutoService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    EditUserResolver,
    EditPedidoResolver,
    EditProdutoResolver,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
