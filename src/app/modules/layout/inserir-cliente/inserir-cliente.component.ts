import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { NEVER } from 'rxjs';
import { IEndereco } from 'src/app/interface/IEndereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.scss'],
  providers: [EnderecoService]
})
export class InserirClienteComponent implements OnInit {

  enderecoSave: IEndereco = {} as IEndereco;

  items!: MenuItem[];

  public tipos: Array<tipo> = [];
    
  selectedTipos!: String;

  public sexos: Array<sexo> =[];

  selectedSexos!: String;

  selectedPadrao!:String;

  selectedEmail!: String;

  status!: String;

  status_email!:String;

  public telefones: Array<telefone> =[];

  selectedTelefones!: String;

  form!:FormGroup;

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
    
   },
  ]

  radio1!:FormGroup;
  radio2!: FormGroup;
  radio3!: FormGroup;
  radio4!:FormGroup;
  radio5!: FormGroup
  form_pessoa!: FormGroup;
  form_endereco!: FormGroup;
  form_telefone!: FormGroup;
  form_email!:  FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private endereco: EnderecoService
  ) {
    
     this.form_pessoa = formBuilder.group({
      cpf_cnpj: [''],
      inscricao_estadual: [''],
      razao_social: [''],
      data_nascimento: [''],
     })

     this.form_endereco = formBuilder.group({
      endereco: [''],
      bairro: [''],
      cep: [''],
      municipio: [''],
      uf: [''],
     })

     this.form_telefone = formBuilder.group({
      nr_telefone: [''],
      contato: [''],
     })

     this.form_email = formBuilder.group({
      email: [''],
     })

   }

  ngOnInit(): void {
 
  this.tipos.push(
  {tipo: 'Pessoa Fisica'},
  {tipo: 'Pessoa Juridica'})

  this.sexos.push(
    {sexo: 'Masculino'},
    {sexo: 'Feminimo'}
  )

  this.telefones.push(
    {telefone: 'Celular'},
    {telefone: 'Residencial'},
    {telefone: 'Comercial'}
  )

  }

  resetForm(){
    this.form_pessoa.reset();
    this.form_endereco.reset();
    this.form_telefone.reset();
    this.form_email.reset();
  }

  save(){
    this.enderecoSave.endereco = this.form.value.endereco;
    this.enderecoSave.bairro = this.form.value.bairro;
    this.enderecoSave.cep = this.form.value.cep;
    this.enderecoSave.municipio = this.form.value.municipio;
    this.enderecoSave.uf = this.form.value.uf;

  }
  

}

interface tipo{
  tipo: String
}

interface sexo{
  sexo: String
}

interface telefone{
  telefone: String
}