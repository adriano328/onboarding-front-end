import { IEmail } from "./IEmail";
import { IEndereco } from "./IEndereco";
import { ITelefone } from "./ITelefone";

export interface ICliente{
 Id: number;   
 tipo: string;
 cpfoucnpj: string;
 inscricaoEstadual: string;
 situacao: Boolean;
 nomeRazao: string;
 sexo: Boolean;
 dtaNascimento: string;
 enderecos: IEndereco[];
 telefones: ITelefone[];
 emails: IEmail[];
}