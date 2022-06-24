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


@NgModule({
  declarations: [
    LayoutComponentComponent,
    CategoriaComponent,
    HomeComponent,
    InserirCategoriaComponent,
    
    

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    ReactiveFormsModule,


   
  
  ]
})
export class LayoutModule { }
