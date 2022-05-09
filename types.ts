export type Ponto = {
    id: number;
    tipo: string;
    datahora: Date;
};

export interface iModalProps {
    lstPonto: Ponto[];
}