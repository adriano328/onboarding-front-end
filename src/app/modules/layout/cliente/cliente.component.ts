import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { ICliente } from 'src/app/interface/ICliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers:[ClienteService]
})
export class ClienteComponent implements OnInit {

  listCliente: ICliente[] = []

  public tipos: Array<tipo> = [];
    
  selectedTipos!: String;

  public situacoes: Array<situacao> = [];

  selectedSituacao!: String;

  form!: FormGroup;

  nomeRazao!: String;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
  
  ) { 
    this.clienteService.findAll().then(sucess =>{
      this.listCliente = sucess!;
    })
  }

  ngOnInit(): void {

  this.form = this.formBuilder.group({
      nomeRazao:['', Validators.required]
  })

  this.tipos.push(
  {tipo: 'Pessoa Fisica'},
  {tipo: 'Pessoa Juridica'}),

  this.situacoes.push(
    {situacao: 'Ativo'},
    {situacao: 'Inativo'}
  )

  }

  resetForm(){
    this.form.reset();
    this.carregarClientes();
  }

  async findByNome(){
      const dates = await lastValueFrom(this.clienteService.buscarPorNome(this.form.value.nomeRazao));
      this.listCliente = dates;   
    
  }

  

  excluir(id: number): void{
    if(this.clienteService.excuir(id).subscribe()){
      this.carregarClientes();
    }
  }
  
  carregarClientes(){
    this.clienteService.findAll().then(success =>{
      this.listCliente = success!;
    })
  }
  

}


interface tipo{
  tipo: String
}

interface situacao{
  situacao: String
}

