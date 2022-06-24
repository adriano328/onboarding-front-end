import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';






@NgModule({
  declarations: [
    LayoutComponentComponent,
    CategoriaComponent,
    

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,

   
  
  ]
})
export class LayoutModule { }
