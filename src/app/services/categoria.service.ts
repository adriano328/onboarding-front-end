import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICategoria } from "../interface/ICategoria";
import { IProduto } from "../interface/IProduto";
import {map, catchError} from 'rxjs/operators';

@Injectable()

export class CategoriaService {


    constructor(private http: HttpClient){}

    private URL: string = 'http://localhost:8080/categoria'
    

    save(categoria: ICategoria){
        const url = `${environment.api}/categoria`;

     return this.http.post(url, categoria).toPromise();
    }

  async findAll(){
        const url = `${environment.api}/categoria/lista-categoria`;
        return await this.http.get<ICategoria[]>(url).toPromise();
    }


    buscaTodos(){
        return this.http.get<ICategoria[]>(`${this.URL}/lista-categoria`);
    }

    buscarPorId(id: number): Observable<ICategoria>{
        return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    atualizar(categoria: ICategoria){
        return this.http.put<ICategoria>(`${this.URL}`, categoria).pipe(
            map(retorno => retorno)
        )
    }


}