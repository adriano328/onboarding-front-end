import { Component, Injectable, OnInit } from '@angular/core';
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
              {label: 'Categoria', 
              routerLink: '/layout/categoria'},
              {label: 'Produto', 
              routerLink: '/layout/produto'},
              {label: 'Cliente', 
              routerLink: '/layout/cliente'},
          ]
      }
  ];
}

router(){
  let selectEl = document.getElementsByTagName('select');
  selectEl[0].addEventListener('change', function() {
    location.href=this.value;
});
  
}
  }

  
 


