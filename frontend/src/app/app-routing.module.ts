import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { IdiomasComponent } from './views/idiomas/idiomas.component';

import { LstpaisesComponent } from './views/lstpaises/lstpaises.component'
import { ComponentePaiComponent } from './views/componente-pai/componente-pai.component';

const routes: Routes = [
  // Carrega tela do boas-vindas
  {
    path: '',
    component: HomeComponent
  }, 
  // Carrega tela de CRUD - Create / Read / Update / Delete
  {
    path: 'products',
    component: ProductCrudComponent
  },
  // Carrega tela de Create
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'clients',
    component: ClientCrudComponent
  },
  {
    path: 'clients/create',
    component: ClientCreateComponent
  },
  {
    path: 'clients/update/:id',
    component: ClientUpdateComponent
  },
  {
    path: 'clients/delete/:id',
    component: ClientDeleteComponent
  },
  {
    path: 'languages',
    component: IdiomasComponent
  },
  {
    path: 'lstpaises',
    component: LstpaisesComponent
  },
  {
    path: 'componente-pai',
    component: ComponentePaiComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
