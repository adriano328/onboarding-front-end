import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { ICategoria } from 'src/app/interface/ICategoria';
import { IProduto } from 'src/app/interface/IProduto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ProdutoService, CategoriaService]

})
export class ProdutoComponent implements OnInit {

produtoList: IProduto = {} as IProduto

listProduto: IProduto[] = [];

filterProduto: IProduto[] = [];

baseApiUrl = environment.api

searchTerm = "";

form!: FormGroup;

listCategoria: ICategoria[] = [];

selectedCat!: ICategoria;

public situacoes: Array<situacao> = [];

selectedtipo!: String;

nome!: String;


  constructor(
  private produtoService: ProdutoService,
  private categoriaService: CategoriaService,
  private formBuilder: FormBuilder,
  private router: Router,
  private activedRouter: ActivatedRoute,
  private http: HttpClient

  ) {
    this.produtoService.findAll().then(sucess =>{
      this.listProduto = sucess!;
    })
  }

  ngOnInit(): void {
    
    this.carregarProdutos();
    this.categoriaService.findAll().then(success => {
      this.listCategoria = success!;
    }),


    
    this.form = this.formBuilder.group({
      nome:['', Validators.required]
    }),

    this.situacoes.push(
      {
        situacao:"Ativo"
      },
      {
        situacao:"Inativo"
      }
    )
    
  }



  resetForm(){
    this.form.reset();
    this.carregarProdutos();
  }

  async findByNome(){
    const dates = await lastValueFrom(this.produtoService.buscarPorNome(this.form.value.nome));
    this.listProduto = dates;
  }

  excluir(id: number): void{
    if( this.produtoService.excluir(id).subscribe()){
      this.carregarProdutos();
    }
  }

  carregarProdutos(){
   this.produtoService.findAll().then(success => {
    this.listProduto = success!;
   })
  }
}

interface situacao{
  situacao: String;
}


