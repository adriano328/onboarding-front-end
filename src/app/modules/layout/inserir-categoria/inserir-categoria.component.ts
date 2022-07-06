import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ICategoria } from 'src/app/interface/ICategoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.component.html',
  styleUrls: ['./inserir-categoria.component.scss'],
  providers: [CategoriaService, MessageService]
})
export class InserirCategoriaComponent implements OnInit {

  categoriaSave: ICategoria = {} as ICategoria;

  form!:FormGroup;
 
  selectedSituacao!: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService
  ) {
  this.form = this.formBuilder.group({
   nome: ['', Validators.required]
  }) }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:['', , Validators.required]
    })
  }


  save(){

    this.categoriaSave.nome = this.form.value.nome;
    this.categoriaSave.situacao = this.selectedSituacao

  if(this.form.valid && this.selectedSituacao != undefined){
    this.categoriaService.save(this.categoriaSave).then(sucess => {
      this.messageService.add({severity:'success', summary:'Categoria', detail:'Categoria salva com sucesso!'});
      setTimeout(()=>{
        this.form.reset();
        this.selectedSituacao = {}
      }, 700);
    })
  }else{
    this.messageService.add({severity:'error', summary:'Categoria', detail:'Erro ao salvar Categoria!'})
  }
    
  }
}
