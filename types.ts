export type tPageParams = {};

export class Ponto {
    id: number = 0;
    tipo: string = '';
    dataHora: Date = new Date();

    constructor(id: number, tipo: string, dataHora: Date) {
        this.id = id;
        this.tipo = tipo;
        this.dataHora = dataHora;
    }
};

export type tPonto = {
    id: number;
    tipo: string;
    dataHora: Date;
};

export interface iPontoModalProps {
    lstPonto: tPonto[];
};

export type Config = {
    horarioEntradaPadrao: Date;
    horarioSaidaPadrao: Date;
};