import React from 'react';
import * as ReactRedux from 'react-redux';
//import { getFlightListAction } from '../../../../redux/reducers/airportsList';


export default function DestinyAirPort() {
  // const dispatch = ReactRedux.useDispatch()

  // React.useEffect(() => {
  //   dispatch(getFlightListAction());
  // }, [])

  return (
    <div className="select-picker">
      <label className="distiny" htmlFor="distiny-picker">Aeroporto de Destino</label>
      <select className="distiny-picker">
        {/* {listaAeroportos.map(aeroporto => <option key={aeroporto}>{aeroporto}</option>)} */}
      </select>
    </div>
  )
}