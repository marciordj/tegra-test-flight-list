import React from 'react';

export default function DestinyAirPort() {

  return (
    <div className="select-picker">
      <label className="distiny" htmlFor="distiny-picker">Aeroporto de Destino</label>
      <select className="distiny-picker">
        <option value="brazil">Congonhas</option>
        <option value="brazil">Santos Dumont</option>
        <option value="brazil">Guarulhos</option>
        <option value="brazil">Batatal</option>
      </select>
    </div>
  )
}