import { tPonto } from './Types';

export interface iPontoModalProps {
    lstPonto: tPonto[];
};

export interface iLink {
    strLink: string;
}

export interface iComponent {
    onPress: any;
    title: string;
}

export interface iConfig {
    dtaHorarioEntradaPadrao: Date;
    dtaHorarioSaidaPadrao: Date;
    dtaHorarioSaidaAlmoco: Date;
    dtaHorarioVoltaAlmoco: Date;
  };