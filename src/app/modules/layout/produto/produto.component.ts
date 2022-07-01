import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/interface/IProduto';
import { ProdutoService } from 'src/app/services/produto.service';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [ProdutoService]

})
export class ProdutoComponent implements OnInit {

produtoList: IProduto = {} as IProduto

listProduto: IProduto[] = [];

  constructor(
  private produtoService: ProdutoService

  ) {
    this.produtoService.findAll().then(sucess =>{
      this.listProduto = sucess!;
    })
  }

  ngOnInit(): void {

  }

}
