import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { ProdutoComponent } from './produto/produto.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponentComponent,
    children: [
      {
        path: 'categoria', component: CategoriaComponent,
      },
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'inserir-categoria', component: InserirCategoriaComponent
      },
      {
        path: 'produto', component: ProdutoComponent
      },
      {
        path: 'inserir-produto', component: InserirProdutoComponent
      },
      {
        path: 'cliente', component: ClienteComponent
      },
      {
        path: 'inserir-cliente', component : InserirClienteComponent
      },
      {
        path: 'inserir-endereco', component: InserirEnderecoComponent
      },
      {
        path: 'editar/:id', component: ProdutoComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
