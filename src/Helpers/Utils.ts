import { tPonto, tConfig, tPontoJoin } from "../Interfaces/Types";
import * as Localization from 'expo-localization';
import { Styles } from "../Styles";

let historicoDePontos: tPonto[] = [];

export function addTimeRegister(pRegistrosDePonto: tPonto): void {
  historicoDePontos.push(pRegistrosDePonto);
}

export function getLastIdFromTimeRegisterHistory(): number {
  const numIds = historicoDePontos.map(e => e.id);
  return Math.max(...numIds);
}

export function setTimeRegister(pRegistrosDePonto: tPonto[]): void {
  historicoDePontos = pRegistrosDePonto;
}

export function getTimeRegisterHistory(): tPonto[] {
  return historicoDePontos;
}

export function sortTimeRegistryHistory(): void {
  historicoDePontos = historicoDePontos.sort(
    (objA, objB) => objA.dataHora.getTime() - objB.dataHora.getTime(),
  );
}

/** Verifiy if the data is null or undefined.
 *
 * @param pValue Any value that need validation.
 * @returns True if the pValue is not null or undefined and False in any other case.
 */
export function isNullOrUndefined(pValue: any): boolean {
  if (pValue === null) {
    return true;
  }

  if (pValue === undefined) {
    return true;
  }

  return false;
}

let config: tConfig;

/** Set the config of the time register.
 *
 * @param pConfig
 */
export function setConfig(pConfig: tConfig): void {
  config = pConfig;
}

/** Get the config of the time register.
 * @returns The config.
 */
export function getConfig(): tConfig {
  // If config doesn`t exist, create a new one.
  if (isNullOrUndefined(config)) {
    const config: tConfig = {
      dtaHorarioInicioExpedinte: new Date(),
      dtaHorarioFimExpediente: new Date(),
      dtaHorarioInicioAlmoco: new Date(),
      dtaHorarioFimAlmoco: new Date(),
    };
    setConfig(config);
  }
  return config;
}

export function setHighlightStyleToDate(pPonto: tPonto) {
  /*
  new date() < inicioExpediente: Adiantado
  new date() > inicioExpediente && new date() < inicioAlmoco: Registro inexperado
  if new date() < fimAlmoco: Adiantado
    else if (new date() - fimAlmoco) < 1hora: Menos de 1h de almoço
  new date() > fimAlmoco && new date() < fimExpediente: Registro inexperado
  new date() > fimExpediente: Hora extra
  */

  let style: any = Styles.text;
  // Marca pontos antes do horário de inicio do expediente.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
    getConfig().dtaHorarioInicioExpedinte.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusHoraExtra;
  }

  // Marca registros durante o periodo entre o inicio do expediente e o inicio do almoço.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
      getConfig().dtaHorarioInicioExpedinte.toLocaleTimeString(Localization.locale) &&
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
      getConfig().dtaHorarioInicioAlmoco.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusAtrasado;
  }

  // Marca pontos durante o almoço.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
      getConfig().dtaHorarioInicioAlmoco.toLocaleTimeString(Localization.locale) &&
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
      getConfig().dtaHorarioFimAlmoco.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusHoraExtra;
  }

  // Marca registros durante o periodo entre o fim do almoço e o fim do expediente.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
      getConfig().dtaHorarioFimAlmoco.toLocaleTimeString(Localization.locale) &&
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
      getConfig().dtaHorarioFimExpediente.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusAtrasado;
  }

  // Marca registros após o o fim do expediente.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
    getConfig().dtaHorarioFimExpediente.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusHoraExtra;
  }

  return style;
}

export function joinPontoByDate(pLstPonto: tPonto[]) {
  let lstJoinedTimeByDate: tPontoJoin[] = [];
  for (let i = 0; i < pLstPonto.length; i++) {
    const objIPonto: tPonto = pLstPonto[i];

    const tmpJoinedDate = lstJoinedTimeByDate.find(e => e.date.toLocaleDateString(Localization.locale) === objIPonto.dataHora.toLocaleDateString(Localization.locale));
    const indexOfJoinedDate = lstJoinedTimeByDate.findIndex(e => e.date.toLocaleDateString(Localization.locale) === objIPonto.dataHora.toLocaleDateString(Localization.locale));
    if (isNullOrUndefined(tmpJoinedDate)) {
      let lstPontoAux: tPonto[] = [];
      lstPontoAux.push(objIPonto);
      lstJoinedTimeByDate.push({
        date: objIPonto.dataHora,
        lstPonto: lstPontoAux
      });
    } else {
      lstJoinedTimeByDate[indexOfJoinedDate].lstPonto.push(objIPonto);
    }    
  }

  return lstJoinedTimeByDate;
}