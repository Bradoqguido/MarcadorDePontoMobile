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