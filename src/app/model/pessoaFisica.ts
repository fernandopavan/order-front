export interface PessoaFisica {
    id: number;
    nome: string;
    sexo?: string;
    email?: string;
    dataNascimento: string;
    naturalidade?: string;
    nacionalidade?: string;
    cpf: string;
    senha?: string;
    perfis: string;
}
