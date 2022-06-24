import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.scss']
})
export class InserirProdutoComponent implements OnInit {
  
  form!:FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  this.form = this.formBuilder.group({
   ativo: [''],
   desativo: ['']
  }) }

  ngOnInit(): void {
  }

}
