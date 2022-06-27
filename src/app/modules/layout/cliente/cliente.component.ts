import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente = [
    {
      nome: 'Lucas Adriano Dias Ramos',
      cpf: '048.146.171-00',
      situacao: 'Ativo',
    },
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
