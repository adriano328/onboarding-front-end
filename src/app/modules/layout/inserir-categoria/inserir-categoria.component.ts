import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  situacao!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService
  ) {
  this.form = this.formBuilder.group({
   nome: ['']
  }) }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:['']
    })
  }

  reserForm(){
    this.form.reset();
  }

  save(){

    this.categoriaSave.nome = this.form.value.nome;
    this.categoriaSave.situacao = this.situacao

    this.categoriaService.save(this.categoriaSave).then(success => {
      if(success){
        this.messageService.add({severity:'success', summary:'Categoria', detail:'Categoria salva com sucesso!'});
      }
    }).catch(error => {
      if(error.status == "400"){
        this.messageService.add({severity:'error', summary:'Categoria', detail:'Erro ao salvar categoria'});
      }
    },
    
    );    
    
  }
}
