import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ICategoria } from 'src/app/interface/ICategoria';
import { IProduto } from 'src/app/interface/IProduto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.scss'],
  providers: [CategoriaService, ProdutoService, MessageService]
})
export class AtualizarProdutoComponent implements OnInit {

  produtoSave: IProduto = {} as IProduto;

  form!:FormGroup;
  categoria!: String;

  listCategoria: ICategoria[] = [];

  categorias: Array<categoria> = [];

  selectedCat!: ICategoria;

  situacoes: Array<situacao>=[]

  selectedSituacao!: any;

  selectedRadio = true;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private activedRouter: ActivatedRoute,
    private router : Router
    
    
  ) {
    const idUrl = this.activedRouter.snapshot.paramMap.get('id');
    const id = Number(idUrl);

    this.produtoService.buscarPorId(id).subscribe(retorno => {
      this.produtoSave = retorno;
    })
    

  this.form = this.formBuilder.group({
   nome:[[''], Validators.required],
  })}

  ngOnInit(): void {
    this.categoriaService.findAll().then(success => {
      this.listCategoria = success!;
    });    
  }


   
  

  save(){
    
    this.produtoSave.nome = this.form.value.nome;



    if(this.form.valid && this.produtoSave.situacao != undefined){
      
      this.produtoService.atualizar(this.produtoSave).subscribe();
    } else {
      
      this.messageService.add({severity:'error', summary:'Produto', detail:'Erro ao salvar Produto!'})
    }
  
  }

  


}

interface categoria{
  nome: String,
  value: string
}

interface situacao{
  situacao: boolean
}
