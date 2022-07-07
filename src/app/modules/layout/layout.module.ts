import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import {TabViewModule} from 'primeng/tabview';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';



@NgModule({
  declarations: [
    LayoutComponentComponent,
    CategoriaComponent,
    HomeComponent,
    InserirCategoriaComponent,
    ProdutoComponent,
    InserirProdutoComponent,
    ClienteComponent,
    InserirClienteComponent,
    InserirEnderecoComponent,
    AtualizarProdutoComponent
    
    

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TabViewModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule
    
  
  ]
})
export class LayoutModule { }

