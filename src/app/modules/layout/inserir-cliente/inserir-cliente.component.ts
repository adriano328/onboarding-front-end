import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { NEVER } from 'rxjs';
import { ICliente } from 'src/app/interface/ICliente';
import { IEmail } from 'src/app/interface/IEmail';
import { IEndereco } from 'src/app/interface/IEndereco';
import { ITelefone } from 'src/app/interface/ITelefone';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MessageService } from 'primeng/api';
import { AtualizarEnderecoComponent } from '../atualizar-endereco/atualizar-endereco.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.scss'],
  providers: [EnderecoService, ClienteService, MessageService, AtualizarEnderecoComponent]
})
export class InserirClienteComponent implements OnInit {

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
    private atualizarEndereco: AtualizarEnderecoComponent,
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
      cpf_cnpj: ['05711830180', Validators.required],
      inscricao_estadual: ['123456', Validators.required],
      razao_social: ['Lucas LTDA', Validators.required],
      data_nascimento: ['07/08/1997', Validators.required],
     })

     this.form_endereco = formBuilder.group({
      endereco: ['Rua mexico', Validators.required],
      bairro: ['Jardim imperial', Validators.required],
      cep: ['78143312', Validators.required],
      municipio: ['Várzea grande', Validators.required],
      uf: ['MT', Validators.required],
     })

     this.form_telefone = formBuilder.group({
      nr_telefone: ['65993038547', Validators.required],
      contato: ['65993038547', Validators.required],
     })

     this.form_email = formBuilder.group({
      email: ['alefepdias@gmail.com',[Validators.required, Validators.email]],
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
    this.enderecoSave.endereco = this.form_endereco.value.endereco
    this.enderecoSave.bairro = this.form_endereco.value.bairro
    this.enderecoSave.cep = this.form_endereco.value.cep
    this.enderecoSave.municipio = this.form_endereco.value.municipio
    this.enderecoSave.uf = this.form_endereco.value.uf

    this.enderecoList.push(this.enderecoSave)
  }

  addTelefoneOnListSave(){
    this.telefoneSave.numeroTelefone = this.form_telefone.value.nr_telefone
    this.telefoneSave.contato = this.form_telefone.value.contato    
    this.telefoneSave.tipo = this.selectedTipoTelefones;
    this.telefoneSave.padrao = this.selectedPadraoTelefone;
    this.telefoneList.push(this.telefoneSave)

  }

  addEmailOnListSave(){
    this.emailSave.email = this.form_email.value.email
    this.emaiList.push(this.emailSave)
  }


  save(){
    this.pessoaSave.cpfoucnpj = this.form_pessoa.value.cpf_cnpj;
    this.pessoaSave.inscricaoEstadual = this.form_pessoa.value.inscricao_estadual
    this.pessoaSave.nomeRazao = this.form_pessoa.value.razao_social
    this.pessoaSave.dtaNascimento = this.form_pessoa.value.data_nascimento
    this.pessoaSave.tipo = this.selectedTipos;
    this.pessoaSave.situacao = this.selectedSituacao;
    this.pessoaSave.sexo = this.selectedSexos;
    this.pessoaSave.enderecos = this.enderecoList;
    this.pessoaSave.emails = this.emaiList;
    this.pessoaSave.telefones = this.telefoneList;
    

    

   if(this.form_pessoa && this.form_endereco && this.form_telefone && this.form_email 
    && this.selectedTipos && this.selectedSexos && this.selectedSituacao
        && this.selectedEmail && this.selectedTipoTelefones != undefined){
        this.clienteService.save(this.pessoaSave).then(sucess => {
          this.messageService.add({severity:'success', summary:'Cliente', detail:'Cliente salvo com sucesso!'})
          setTimeout(()=> {
            this.form_pessoa.reset();
            this.form_endereco.reset();
            this.form_telefone.reset();
            this.form_email.reset();
          },700);

          
        })
      }else{
        this.messageService.add({severity:'error', summary:'Cliente', detail:'Erro ao salvar Cliente'})
      }

     
    

    
  }

  
}