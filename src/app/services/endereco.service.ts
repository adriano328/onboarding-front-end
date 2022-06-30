import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IEndereco } from "../interface/IEndereco";

@Injectable()

export class EnderecoService{
    constructor(private http: HttpClient){}

    save(endereco: IEndereco){
        const url = `${environment.api}/endereco`;

        return this.http.post(url, endereco).toPromise();
    }
}