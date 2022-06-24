import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
