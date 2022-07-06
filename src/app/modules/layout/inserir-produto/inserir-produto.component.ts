import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ICategoria } from 'src/app/interface/ICategoria';
import { IProduto } from 'src/app/interface/IProduto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.scss'],
  providers: [ProdutoService, CategoriaService, MessageService]
})
export class InserirProdutoComponent implements OnInit {
  
  produtoSave: IProduto = {} as IProduto;

  form!:FormGroup;
  categoria!: String;

  listCategoria: ICategoria[] = [];

  categorias: Array<categoria> = [];

  selectedCat!: ICategoria;

  situacoes: Array<situacao>=[]

  selectedSituacao!: any;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private messageService: MessageService
    
  ) {
  this.form = this.formBuilder.group({
   nome:['', Validators.required],
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


   
  

  save(){
    
    this.produtoSave.nome = this.form.value.nome;
    this.produtoSave.situacao = this.selectedSituacao;
    this.produtoSave.categoria = this.selectedCat!


    if(this.form.valid && this.selectedSituacao != undefined){
      this.produtoService.save(this.produtoSave).then(sucess => {
          this.messageService.add({severity:'success', summary:'Produto', detail:'Produto salvo com sucesso!'})
          setTimeout(() => {
            this.form.reset();
            this.selectedSituacao = {}
          }, 700);
      })
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
