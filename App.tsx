import * as React from 'react';
import { setConfig, addTimeRegister } from './src/Helpers/Utils';
import Routes from './src/pages/Routes';

import dateTimeSamples from './src/Helpers/dateTimeSamples.json';

export default function App() {

  setConfig({
    dtaHorarioInicioExpedinte: new Date(dateTimeSamples.config.dtaHorarioInicioExpedinte),
    dtaHorarioFimExpediente: new Date(dateTimeSamples.config.dtaHorarioFimExpediente),
    dtaHorarioInicioAlmoco: new Date(dateTimeSamples.config.dtaHorarioInicioAlmoco),
    dtaHorarioFimAlmoco: new Date(dateTimeSamples.config.dtaHorarioFimAlmoco)
  });

  dateTimeSamples.lstPontos.forEach(e => {
    addTimeRegister({
      id: e.id,
      tipo: e.tipo,
      dataHora: new Date(e.dataHora),
    });
  });

  return (
    <>
      <Routes />
    </>
  );
}