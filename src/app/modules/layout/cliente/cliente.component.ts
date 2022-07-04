import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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

  public tipos: Array<tipo> = [];
    
  selectedTipos!: String;

  public situacoes: Array<situacao> = [];

  selectedSituacao!: String;

  form1!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

  this.form1 = this.formBuilder.group({
      nome:['']
  })

  this.tipos.push(
  {tipo: 'Pessoa Fisica'},
  {tipo: 'Pessoa Juridica'}),

  this.situacoes.push(
    {situacao: 'Ativo'},
    {situacao: 'Inativo'}
  )

  }

  resetForm(){
    this.form1.reset();
  }
    

  

}



interface tipo{
  tipo: String
}

interface situacao{
  situacao: String
}