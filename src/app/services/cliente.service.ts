import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ICliente } from "../interface/ICliente";

@Injectable()

export class ClienteService{
    constructor(private http: HttpClient){}

    save(cliente: ICliente){
        const url = `${environment.api}/cliente`;

     return this.http.post(url, cliente).toPromise();
    }
}