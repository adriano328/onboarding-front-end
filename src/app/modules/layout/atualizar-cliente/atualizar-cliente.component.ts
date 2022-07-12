import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ICliente } from 'src/app/interface/ICliente';
import { IEmail } from 'src/app/interface/IEmail';
import { IEndereco } from 'src/app/interface/IEndereco';
import { ITelefone } from 'src/app/interface/ITelefone';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { AtualizarTelefoneComponent } from '../atualizar-telefone/atualizar-telefone.component';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.scss'],
  providers: [ClienteService, MessageService, EnderecoService]
})
export class AtualizarClienteComponent implements OnInit {

  clienteSave: ICliente = {} as ICliente;
 
  items!: MenuItem[];

  tipoPessoa: any[] = [];
  tipoTelefone: any[] = [];
  sexo: any[] = [];

  selectedTipos!: string;

  selectedSexos!: Boolean;

  selectedPadraoTelefone!:String;

  selectedSituacao!: boolean;

  selectedEmail!: String;

  status!: String;

  status_email!:String;

  selectedTipoTelefones!: String;

  selectedPadraoEndereco!: boolean;

  form!:FormGroup;

  radio1!:FormGroup;
  radio2!: FormGroup;
  radio3!: FormGroup;
  radio4!:FormGroup;
  radio5!: FormGroup
  form_pessoa!: FormGroup;
  form_endereco!: FormGroup;
  form_telefone!: FormGroup;
  form_email!:  FormGroup;

  pessoaSave: ICliente = {} as ICliente;
  enderecoEdit: IEndereco = {} as IEndereco;
  enderecoSave: IEndereco = {} as IEndereco;
  emailSave: IEmail = {} as IEmail;
  telefoneSave: ITelefone = {} as ITelefone;

  enderecoList: IEndereco[] = [];
  emaiList: IEmail[] = [];
  telefoneList: ITelefone[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private endereco: EnderecoService,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private activedRouter: ActivatedRoute,
    private router: Router,
    
  ) {

    this.tipoPessoa = [
      {descricao: 'Pessoa físca'},
      {descricao: 'Pessoa Juridica'}
    ]

    this.sexo = [
      {descricao: 'Masculino', value: 'false'},
      {descricao: 'Femenino', value: 'true'}
    ]

    this.tipoTelefone = [
      {descricao: 'Residencial'},
      {descricao: 'Comercial'},
      {descricao: 'Celular'}
    ]
    
     this.form_pessoa = formBuilder.group({
      cpf_cnpj: ['', Validators.required],
      inscricao_estadual: ['', Validators.required],
      razao_social: ['', Validators.required],
      data_nascimento: ['', Validators.required],
     })

     this.form_endereco = formBuilder.group({
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      municipio: ['', Validators.required],
      uf: ['', Validators.required],
     })

     this.form_telefone = formBuilder.group({
      nr_telefone: ['', Validators.required],
      contato: ['', Validators.required],
     })

     this.form_email = formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
     })

     const idUrl = this.activedRouter.snapshot.paramMap.get('id');
     const id = Number(idUrl);

     this.clienteService.buscarPorId(id).subscribe(retorno => {
        this.clienteSave = retorno;
     })

   }

  ngOnInit(): void {

  }

  resetForm(){
    this.form_pessoa.reset();
    this.form_endereco.reset();
    this.form_telefone.reset();
    this.form_email.reset();
  }

  addEnderecoOnListSave(){

    this.enderecoEdit = {};

    this.enderecoEdit.endereco = this.form_endereco.value.endereco;
    this.enderecoEdit.bairro = this.form_endereco.value.bairro
    this.enderecoEdit.cep = this.form_endereco.value.cep
    this.enderecoEdit.municipio = this.form_endereco.value.municipio
    this.enderecoEdit.uf = this.form_endereco.value.uf
  
    
    this.clienteSave.enderecos.push(this.enderecoEdit)
  }

  addTelefoneOnListSave(){
    this.telefoneSave.numeroTelefone = this.form_telefone.value.nr_telefone
    this.telefoneSave.contato = this.form_telefone.value.contato    
    this.telefoneSave.tipo = this.selectedTipoTelefones;
    this.telefoneSave.padrao = this.selectedPadraoTelefone;

    this.clienteSave.telefones.push(this.telefoneSave)

  }

  addEmailOnListSave(){
    this.emailSave.email = this.form_email.value.email
    this.clienteSave.emails.push(this.emailSave)


  }


  save(){

  

          
          
        this.clienteService.atualizar(this.clienteSave).subscribe()

     
    

    
  }

  
}