import { tPonto } from './Types';

export interface iPontoModalProps {
    lstPonto: tPonto[];
};

export interface iLink {
    strLink: string;
}

export interface iButton {
    onPress: any;
    bgColor: string; 
    text: string;
}