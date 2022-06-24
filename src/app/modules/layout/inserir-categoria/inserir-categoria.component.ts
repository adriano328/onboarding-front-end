import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.component.html',
  styleUrls: ['./inserir-categoria.component.scss']
})
export class InserirCategoriaComponent implements OnInit {

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
