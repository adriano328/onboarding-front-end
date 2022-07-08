import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ICliente } from 'src/app/interface/ICliente';
import { IEmail } from 'src/app/interface/IEmail';
import { IEndereco } from 'src/app/interface/IEndereco';
import { ITelefone } from 'src/app/interface/ITelefone';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-atualizar-endereco',
  templateUrl: './atualizar-endereco.component.html',
  styleUrls: ['./atualizar-endereco.component.scss'],
  providers: [ClienteService, MessageService, EnderecoService, ]
})
export class AtualizarEnderecoComponent implements OnInit {

  enderecoSave: IEndereco = {} as IEndereco;

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
    private enderecoService: EnderecoService,
    private activedRouter: ActivatedRoute,
    private router: Router
    
    
  ) {
    
     this.form_endereco = formBuilder.group({
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['78143312', Validators.required],
      municipio: ['Várzea grande', Validators.required],
      uf: ['MT', Validators.required],
     })

     const idUrl = this.activedRouter.snapshot.paramMap.get('id');
     const id = Number(idUrl);

     this.enderecoService.buscarPorId(id).subscribe(retorno => {
      this.enderecoSave = retorno;
     })

   }

  ngOnInit(): void {

  }

  resetForm(){
    this.form_endereco.reset();
  }

  addEnderecoOnListSave(){
    this.enderecoSave.endereco = this.form_endereco.value.endereco
    this.enderecoSave.bairro = this.form_endereco.value.bairro
    this.enderecoSave.cep = this.form_endereco.value.cep
    this.enderecoSave.municipio = this.form_endereco.value.municipio
    this.enderecoSave.uf = this.form_endereco.value.uf

    this.enderecoList.push(this.enderecoSave)
  }

  atualizar(){
    this.enderecoSave.endereco = this.form_endereco.value.endereco;
    this.enderecoSave.bairro = this.form_endereco.value.bairro;
    this.enderecoSave.cep = this.form_endereco.value.cep;
    this.enderecoSave.municipio = this.form_endereco.value.municipio;
    this.enderecoSave.uf = this.form_endereco.value.uf;
    this.enderecoSave.uf = this.form_endereco.value.padrao;

    if(this.form_endereco != undefined){
      this.enderecoService.atualizar(this.enderecoSave).subscribe();
    }else{
      this.messageService.add({severity:'error', summary:'Endereço', detail:'Erro ao atualizar Endereço'})
    }

  }



  
}