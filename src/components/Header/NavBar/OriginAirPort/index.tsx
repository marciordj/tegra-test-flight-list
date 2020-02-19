import React from 'react';


interface IAirports {
  name: string;
}


export default function OriginAirPort() {
  async function getAirportsList() {
    const response = await fetch('https://api-voadora.dev.tegra.com.br/flight/companies');
    const airports = response.json();

    return airports;
  }
  


  return (
    <div className="select-picker">
      <label className="origin" htmlFor="origin-picker">Aeroporto de Origem</label>
      <select className="origin-picker">
        <option value="brazil">Capela do Alto</option>
        <option value="brazil">Capela do Alto</option>
        <option value="brazil">Capela do Alto</option>
        <option value="brazil">Capela do Alto</option>
        <option value="brazil"></option>
      </select>
    </div>
  )
}