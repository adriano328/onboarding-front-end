import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ITelefone } from "../interface/ITelefone";
import {map, catchError} from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable()

export class TelefoneService {

    private URL: string = 'http://localhost:8080/telefone'

    constructor(private http: HttpClient){}

    save(telefone: ITelefone){
        const url = `${environment.api}/telefone`;

        return this.http.post(url, telefone).toPromise();
    }

    buscarTodos(){
        return this.http.get<ITelefone[]>(`${this.URL}/lista-telefone`);
    }

    buscarPorId(id: number): Observable<ITelefone>{
        return this.http.get<ITelefone>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

   atualizar(telefone: ITelefone){
    return this.http.put<ITelefone>(`${this.URL}`, telefone).pipe(
        map(retorno => retorno)
    )
   }

    }