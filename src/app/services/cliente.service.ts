import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICliente } from "../interface/ICliente";
import {map, catchError} from 'rxjs/operators';

@Injectable()

export class ClienteService{

    nome!: String;

    private URL: string = 'http://localhost:8080/cliente'

    constructor(private http: HttpClient){}

    save(cliente: ICliente){
        const url = `${environment.api}/cliente`;

     return this.http.post(url, cliente).toPromise();
    }

    findAll(): Observable<any>{
        const url = `${environment.api}/cliente/lista-cliente`;
      return  this.http.get<ICliente[]>(url).pipe(
        map(retorno => retorno)
      )
    }

    excluir(id: number): Observable<any>{
        return this.http.delete<any>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    buscarTodos(){
        return this.http.get<ICliente[]>(`${this.URL}/lista-cliente`)
    }

    buscarPorId(id: number): Observable<ICliente>{
        return this.http.get<ICliente>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    atualizar(cliente: ICliente){
        return this.http.put<ICliente>(`${this.URL}`, cliente).pipe(
            map(retorno => retorno)
        )
    }

    buscarPorNome(nomeRazao: string){
        return this.http.get<ICliente[]>(`${this.URL}/listar-por-nome`,
        {params: new HttpParams().set('nomeRazao', nomeRazao || '')}).pipe(
            map(retorno => retorno)
        )
    }
 

}
