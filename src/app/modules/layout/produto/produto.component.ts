import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoria } from 'src/app/interface/ICategoria';
import { IProduto } from 'src/app/interface/IProduto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ProdutoService, CategoriaService]

})
export class ProdutoComponent implements OnInit {

produtoList: IProduto = {} as IProduto

listProduto: IProduto[] = [];

form!: FormGroup;

listCategoria: ICategoria[] = [];

selectedCat!: ICategoria;

  constructor(
  private produtoService: ProdutoService,
  private categoriaService: CategoriaService,
  private formBuilder: FormBuilder,

  ) {
    this.produtoService.findAll().then(sucess =>{
      this.listProduto = sucess!;
    })
  }

  ngOnInit(): void {
    this.categoriaService.findAll().then(success => {
      console.log(success);
      
      this.listCategoria = success!;
    });
    
    this.form = this.formBuilder.group({
      nome:['', Validators.required]
    })
  }

  resetForm(){
    this.form.reset();
  }

  

}


