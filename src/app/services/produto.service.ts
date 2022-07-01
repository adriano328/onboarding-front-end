import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IProduto } from "../interface/IProduto";


@Injectable()

export class ProdutoService {
    constructor(private http: HttpClient){}

    save(produto: IProduto){
        const url = `${environment.api}/produto`;

        return this.http.post(url, produto).toPromise();
    }

    async findAll(){
        const url = `${environment.api}/produto/lista-produto`;
        return await this.http.get<IProduto[]>(url).toPromise();
    }

}