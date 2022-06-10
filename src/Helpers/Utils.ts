import { tPonto, tConfig } from "../Interfaces/Types";

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