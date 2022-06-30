import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ICategoria } from "../interface/ICategoria";

@Injectable()

export class CategoriaService {
    constructor(private http: HttpClient){}

    

    save(categoria: ICategoria){
        const url = `${environment.api}/categoria`;

     return this.http.post(url, categoria).toPromise();
    }

  async  findAll(){
        const url = `${environment.api}/categoria/lista-categoria`;
        return await this.http.get<ICategoria[]>(url).toPromise();
    }
}