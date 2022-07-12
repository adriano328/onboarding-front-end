import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduto } from "../interface/IProduto";
import {map, catchError} from 'rxjs/operators';

@Injectable()

export class ProdutoService {

    private URL: string = 'http://localhost:8080/produto'

    constructor(private http: HttpClient){}

    save(produto: IProduto){
        const url = `${environment.api}/produto`;

        return this.http.post(url, produto).toPromise();
    }

      async findAll(){
        const url = `${environment.api}/produto/lista-produto`;
        return await this.http.get<IProduto[]>(url).toPromise();
    }

    excluir(id: number): Observable<any>{
        return this.http.delete<any>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    buscarTodos(){
        return this.http.get<IProduto[]>(`${this.URL}/lista-produto`);
    }

    buscarPorId(id: number): Observable<IProduto>{
        return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    atualizar(produto:IProduto){
        return this.http.put<IProduto>(`${this.URL}`, produto).pipe(
            map(retorno => retorno)
        )
    }


}