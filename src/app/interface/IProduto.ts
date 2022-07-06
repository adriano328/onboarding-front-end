import { ICategoria } from "./ICategoria";

export interface IProduto{
    id: any;
    nome: String;
    categoria: ICategoria;
    situacao: boolean;
}