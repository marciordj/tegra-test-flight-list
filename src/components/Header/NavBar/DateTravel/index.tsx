import React from 'react';


export default function DateTravel() {
  return (
    <div className="select-picker">
      <label className="date" htmlFor="date-picker">Data do vôo</label>
      <input type="date" className="date-picker" value="2019-02-10" />
    </div>
  )
}