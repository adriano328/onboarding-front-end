import { ICategoria } from "./ICategoria";

export interface IProduto{
    id: any;
    nome: string;
    categoria: ICategoria;
    situacao: boolean;
    filter: String;
}