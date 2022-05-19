export type tPageParams = {};

export type tPonto = {
    id: number;
    tipo: string;
    dataHora: Date;
};

export type tConfig = {
    dtaHorarioEntradaPadrao: Date;
    dtaHorarioSaidaPadrao: Date;
    dtaHorarioSaidaAlmoco: Date;
    dtaHorarioVoltaAlmoco: Date;
};