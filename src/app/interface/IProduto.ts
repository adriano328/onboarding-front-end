import { ICategoria } from "./ICategoria";

export interface IProduto{
    id: number;
    nome: String;
    categoria: ICategoria;
    situacao: boolean;
}