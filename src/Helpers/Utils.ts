import { Ponto } from '../Interfaces/Types';

export class Utils {
    
    userId: string = '';
    registrosDePonto: Ponto[] = [{
        id: 0,
        tipo: '',
        dataHora: new Date()
    }];

    constructor(pUserId: string) {
        this.userId = pUserId;
    }
}