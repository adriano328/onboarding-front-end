import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.scss']
})
export class InserirClienteComponent implements OnInit {

  items!: MenuItem[];

  inserirendereco = [
    {
      endereco: 'Rua médixo',
      bairro: 'Imperial',
      cep: '78143-312',
      municipio: 'VG',
      uf: 'MT',
      padrao: '<p-radioButton name="groupname" value="ps4" formControlName="console"></p-radioButton>'
    },
    
  ];

  inserirtelefone = [
    {
      tipo: 'Celular',
      nrTelefone: '6599288-6664',
      contato: 'Pessoal',
      uf: 'MT',
      padrão: '',

    }
  ];

  inseriremail = [
   {
    email: 'lucasadrianodias@gmail.com',
    
   }

  ]

  radio1!:FormGroup;
  radio2!: FormGroup;
  radio3!: FormGroup;
  radio4!:FormGroup;
  radio5!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.radio1 = this.formBuilder.group({
      ativo: [''],

      desativo: ['']
     })

     this.radio2 = this.formBuilder.group({
      ativo: [''],
      desativo: ['']
     })

     this.radio3 = this.formBuilder.group({
      ativo: [''],
      desativo: ['']
     })

     this.radio4 = this.formBuilder.group({
      ativo: [''],
      desativo: ['']
     })

     
     this.radio5 = this.formBuilder.group({
      ativo: [''],
     })



   }

  ngOnInit(): void {
    
  }

  

}
