import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IEndereco } from "../interface/IEndereco";
import {map, catchError} from 'rxjs/operators';

@Injectable()

export class EnderecoService{

    private URL: string = 'http://localhost:8080/endereco'

    constructor(private http: HttpClient){}

    save(endereco: IEndereco){
        const url = `${environment.api}/endereco`;

        return this.http.post(url, endereco).toPromise();
    }

    buscarTodos(){
        return this.http.get<IEndereco[]>(`${this.URL}/lista-endereco`);
    }

    buscarPorId(id: number): Observable<IEndereco>{
        return this.http.get<IEndereco>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    atualizar(endereco: IEndereco){
        return this.http.put<IEndereco>(`${this.URL}`, endereco).pipe(
            map(retorno => retorno)
        )
    }

}