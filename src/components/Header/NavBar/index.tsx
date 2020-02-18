import React from 'react';

export default function NavBar() {

  return (
    <div className="nav-bar">
      <div className="select-picker">
        <label className="origin" htmlFor="origin-picker">Aeroporto de Origem</label>
        <select className="origin-picker">
          <option value="brazil">Congonhas</option>
          <option value="brazil">Santos Dumont</option>
          <option value="brazil">Guarulhos</option>
          <option value="brazil">Batatal</option>
        </select>
      </div>

      <div className="select-picker">
        <label className="distiny" htmlFor="distiny-picker">Aeroporto de Destino</label>
        <select className="distiny-picker">
          <option value="brazil">Congonhas</option>
          <option value="brazil">Santos Dumont</option>
          <option value="brazil">Guarulhos</option>
          <option value="brazil">Batatal</option>
        </select>
      </div>
      
      <div className="select-picker">
        <label className="date" htmlFor="date-picker">Data do vôo</label>
        <input type="date" className="date-picker" value="2019-02-10" />
      </div>
    </div>
  )
}