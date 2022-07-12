import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IEmail } from "../interface/IEmail";
import {map, catchError} from 'rxjs/operators';

@Injectable()

export class EmailService{

    private URL: string = 'http://localhost:8080/email'

    constructor(private http: HttpClient){}

    save(email: IEmail){
        const url = `${environment.api}/email`;
        return this.http.post(url, email).toPromise();
    }

    buscarTodos(){
        return this.http.get<IEmail[]>(`${this.URL}/lista-email`);
    }

    buscarPorId(id: number): Observable<IEmail>{
        return this.http.get<IEmail>(`${this.URL}/${id}`).pipe(
            map(retorno => retorno)
        )
    }

    atualizar(email: IEmail){
        return this.http.put<IEmail>(`${this.URL}`, email).pipe(
            map(retorno=>retorno)
        )
    }


}