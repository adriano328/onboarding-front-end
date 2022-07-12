import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ICliente } from 'src/app/interface/ICliente';
import { IEmail } from 'src/app/interface/IEmail';
import { IEndereco } from 'src/app/interface/IEndereco';
import { ITelefone } from 'src/app/interface/ITelefone';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-atualizar-email',
  templateUrl: './atualizar-email.component.html',
  styleUrls: ['./atualizar-email.component.scss'],
  providers:[MessageService, EmailService]
})
export class AtualizarEmailComponent implements OnInit {

  selectedPadraoTelefone!:String;

  selectedSituacao!: boolean;

  selectedEmail!: String;

  status!: String;

  status_email!:String;

  form_email!:  FormGroup;

  emailSave: IEmail = {} as IEmail;
  emaiList: IEmail[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private activedRouter: ActivatedRoute,
    private router : Router,
    private emailService: EmailService
  ) {


    const idUrl = this.activedRouter.snapshot.paramMap.get('id');
    const id = Number(idUrl);

    this.emailService.buscarPorId(id).subscribe(retorno => {
      this.emailSave = retorno;
      console.log(this.emailSave);
    })

     this.form_email = formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
     })

   }

  ngOnInit(): void {

  }

  resetForm(){
    this.form_email.reset();
  }


  save(){
   
    this.emailSave.email = this.form_email.value.email; 
    
      if(this.form_email.valid != undefined){
        this.emailService.atualizar(this.emailSave).subscribe();
        this.messageService.add({severity:'success', summary:'Email', detail:'E-mail atualizado com sucesso!'})
      }else{
        this.messageService.add({severity:'error', summary:'Email', detail:'Erro ao atualizar E-mail'})

      }

        
    
  }

  
 
  

  
}
