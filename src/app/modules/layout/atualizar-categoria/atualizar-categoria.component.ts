import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ICategoria } from 'src/app/interface/ICategoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['./atualizar-categoria.component.scss'],
  providers: [MessageService, CategoriaService]
})
export class AtualizarCategoriaComponent implements OnInit {

  categoriaSave: ICategoria = {} as ICategoria;

  form!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private activedRouter: ActivatedRoute,
    private router: Router
  ) {
  this.form = this.formBuilder.group({
   nome: ['', Validators.required]
  })

  const idUrl = this.activedRouter.snapshot.paramMap.get('id');
   const id = Number(idUrl);
   
   this.categoriaService.buscarPorId(id).subscribe(retorno => {
    this.categoriaSave = retorno;
   })

}

  ngOnInit(): void {
    
  }


  save(){

  this.categoriaSave.nome = this.form.value.nome;
  

  if(this.form.valid && this.categoriaSave.situacao != undefined){
    this.categoriaService.atualizar(this.categoriaSave).subscribe();
  }else{
    this.messageService.add({severity:'error', summary:'Categoria', detail:'Erro ao salvar Categoria!'})
  }
    
  }
}

interface situacao{
  situacao: String;
}
