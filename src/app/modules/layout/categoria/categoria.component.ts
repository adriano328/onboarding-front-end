import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria = [
    {
      nome: 'Categoria 1',
      situacao: 'Ativo'
    },
    {
      nome: 'Categoria 2',
      situacao: 'Ativo'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
