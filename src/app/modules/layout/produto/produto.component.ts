import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto = [
    {
      nome: 'Produto 1',
      categoria: 'Produto',
      situacao: 'Ativo',
    },
    {
      nome: 'Produto 2',
      categoria: 'Serviço',
      situacao: 'Inativo'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
