import React from 'react';
import { useSelector } from 'react-redux';

import { IAppState } from '../../../../redux/configureStore';

export default function OriginAirPort() {
  const listaAeroportos = useSelector((state: IAppState) => state.listaDeAeroportos.aeroportos);


  return (
    <div className="select-picker">
      <label className="origin" htmlFor="origin-picker">Aeroporto de Origem</label>
      <select className="origin-picker">
        {listaAeroportos.map(aeroporto => <option key={aeroporto} >{aeroporto}</option>)}
      </select>
    </div>
  )
}