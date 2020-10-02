import { RouterModule, Routes } from '@angular/router';
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

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login', component: LoginComponent, canActivate: [AppComponent],
    runGuardsAndResolvers: 'always'
  },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent, resolve: { data: EditUserResolver } },

  { path: 'add-pedido', component: AddPedidoComponent },
  { path: 'list-pedido', component: ListPedidoComponent },
  { path: 'edit-pedido/:id', component: EditPedidoComponent, resolve: { data: EditPedidoResolver } },

  { path: 'add-produto', component: AddProdutoComponent },
  { path: 'list-produto', component: ListProdutoComponent },
  { path: 'edit-produto/:id', component: EditProdutoComponent, resolve: { data: EditProdutoResolver } }
];

export const routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });
