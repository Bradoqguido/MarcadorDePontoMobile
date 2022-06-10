import { tPonto } from './Types';

export interface iPontoModalProps {
    lstPonto: tPonto[];
};

export interface iPonto {
    pPonto: tPonto;
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
}

export interface iAlert {
    strTitle: string;
    strMessage: string;
    txtCancelButton: string;
    onPressCancelButton: any;
    txtOkButton: string;
    onPressOkButton: any;
    txtAskMeLaterButton: string;
    onPressAskMeLaterButton: any;
}

export interface iDatePickerOnChange {
    event: any;
    selectedDate: Date;
}

export interface iReport {
    blnGerarRelatorio: boolean;
}