import { IEmail } from "./IEmail";
import { IEndereco } from "./IEndereco";
import { ITelefone } from "./ITelefone";

export interface ICliente{
 Id: number;   
 tipo: string;
 cpfoucnpj: String;
 inscricaoEstadual: String;
 situacao: Boolean;
 nomeRazao: string;
 sexo: Boolean;
 dtaNascimento: String;
 enderecos: IEndereco[];
 telefones: ITelefone[];
 emails: IEmail[];
}