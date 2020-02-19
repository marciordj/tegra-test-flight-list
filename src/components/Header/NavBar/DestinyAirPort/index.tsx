import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../../redux/configureStore';

export default function DestinyAirPort() {
  const listaAeroportos = useSelector((state: IAppState) => state.listaDeAeroportos.aeroportos);

  return (
    <div className="select-picker">
      <label className="distiny" htmlFor="distiny-picker">Aeroporto de Destino</label>
      <select className="distiny-picker">
        {listaAeroportos.map(aeroporto => <option key={aeroporto}>{aeroporto}</option>)}
      </select>
    </div>
  )
}