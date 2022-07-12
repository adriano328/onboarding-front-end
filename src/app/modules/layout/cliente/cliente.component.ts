import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form1!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
  
  ) { 
    this.clienteService.findAll().then(sucess =>{
      this.listCliente = sucess!;
    })
  }

  ngOnInit(): void {

  this.form1 = this.formBuilder.group({
      nome:['']
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
    this.form1.reset();
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