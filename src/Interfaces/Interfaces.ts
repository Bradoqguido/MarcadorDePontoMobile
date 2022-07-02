import { tPonto, tPontoJoin } from './Types';

export interface iPontoList {
    lstPonto: tPonto[];
};

export interface iClock {
    hourRatio: number;
    minuteRatio: number;
    secondRatio: number;
}

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

export interface iPontoJoin {
    pJoinPonto: tPontoJoin;
  }