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
import { TelefoneService } from 'src/app/services/telefone.service';

@Component({
  selector: 'app-atualizar-telefone',
  templateUrl: './atualizar-telefone.component.html',
  styleUrls: ['./atualizar-telefone.component.scss'],
  providers: [MessageService, EnderecoService, TelefoneService]
})
export class AtualizarTelefoneComponent implements OnInit {

  telefoneSave: ITelefone = {} as ITelefone;

  tipoTelefone: any[] = [];
  
  selectedTipos!: string;

  selectedSexos!: Boolean;

  selectedPadraoTelefone!:String;

  selectedTipoTelefones!: String;

  form_telefone!: FormGroup;

  telefoneList: ITelefone[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private endereco: EnderecoService,
    private messageService: MessageService,
    private telefoneService: TelefoneService,
    private activedRouter: ActivatedRoute,
    private router : Router
  ) {
      this.tipoTelefone = [
      {descricao: 'Residencial'},
      {descricao: 'Comercial'},
      {descricao: 'Celular'}
    ]
    
     this.form_telefone = formBuilder.group({
      numeroTelefone: ['', Validators.required],
      contato: ['', Validators.required],
     })


    const idUrl = this.activedRouter.snapshot.paramMap.get('id');
    const id = Number(idUrl);

    this.telefoneService.buscarPorId(id).subscribe(retorno =>{
     this.telefoneSave = retorno;
    })
   }

  ngOnInit(): void {

  }

  resetForm(){

    this.form_telefone.reset();
  }


   atualizar(){
    
    this.telefoneSave.contato = this.form_telefone.value.contato;
    this.telefoneSave.numeroTelefone = this.form_telefone.value.numeroTelefone;
    this.telefoneSave.padrao = this.form_telefone.value.padrao;
    
    this.telefoneSave.numeroTelefone = this.form_telefone.value.numeroTelefone;
      this.telefoneService.atualizar(this.telefoneSave).subscribe();      
      console.log(this.telefoneSave);

    }
   

   
  }
  
  
