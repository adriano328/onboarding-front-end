import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoria } from 'src/app/interface/ICategoria';
import { IProduto } from 'src/app/interface/IProduto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.scss'],
  providers: [ProdutoService, CategoriaService]
})
export class InserirProdutoComponent implements OnInit {
  
  produtoSave: IProduto = {} as IProduto;

  form!:FormGroup;
  situacao!: boolean;
  categoria!: String;

  listCategoria: ICategoria[] = [];

  categorias: Array<categoria> = [];

  selectedCat!: ICategoria;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
    
  ) {
  this.form = this.formBuilder.group({
   nome:['', Validators.required],
   situacao:['', Validators.required]
  })}

  ngOnInit(): void {

    this.categoriaService.findAll().then(success => {
      console.log(success);
      
      this.listCategoria = success!;
    });    

    this.categorias.push(
      {
        nome: "Selecione",
        value: 'selecione'
      },
      {
        nome: "Esportes",
        value: 'esportes'
      },
      {
        nome: "Eletronicos",
        value:'eletronicos'
      },
      {
        nome: "Eletrodomesticos",
        value: 'eletronicos'
      },
    )
  }

  resetForm(){
    this.form.reset();
  }

  save(){
    console.log( this.selectedCat!);
    
    this.produtoSave.nome = this.form.value.nome;
    this.produtoSave.situacao = this.situacao;
    this.produtoSave.categoria = this.selectedCat!

    console.log(this.produtoSave);
    

    this.produtoService.save(this.produtoSave).then(sucess => {
      
    }).catch(error => {
      // console.log(error);
      
    })
  }

}

interface categoria{
  nome: String,
  value: string
}

