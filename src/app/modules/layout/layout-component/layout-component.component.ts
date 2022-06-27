import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponentComponent implements OnInit {


  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [

      {
          label: 'Cadastro',
          icon: 'pi pi-th-large',
          items: [
              {label: 'Categoria', icon: 'pi pi-fw pi-trash'},
              {label: 'Produto', icon: 'pi pi-fw pi-refresh'},
              {label: 'Cliente', icon: 'pi pi-fw pi-trash'},
          ]
      }
  ];
}
  }

