import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoria } from 'src/app/interface/ICategoria';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {

  
  categoriaSave: ICategoria = {} as ICategoria
  
  listCategoria: ICategoria[] = [];
  
  form!: FormGroup;

  public situacoes: Array<situacao> = [];
  
  selectedtipo!: String;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService
    ) {
     this.categoriaService.findAll().then(success => {
        this.listCategoria = success!;
      })
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:['', Validators.required]      
    }),

   

    
   
    

   this.situacoes.push(
    {situacao:"Ativo"},
    {
      situacao:"Inativo"
    }
    
   )
  }

  submit(){
    console.log("Envio realizado")
  }

  resetForm(){
    this.form.reset();
  }

}

interface situacao{
  situacao: String;
}

