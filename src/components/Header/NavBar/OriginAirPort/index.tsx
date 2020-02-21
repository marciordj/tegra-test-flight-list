import React from 'react';
import * as ReactRedux from 'react-redux';

import { getFlightListAction } from '../../../../redux/reducers/airportsList';

export default function OriginAirPort() {
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(() => {
    dispatch(getFlightListAction());
  }, []);

  return (
    <div className="select-picker">
      <label className="origin" htmlFor="origin-picker">Aeroporto de Origem</label>
      <select className="origin-picker">
        {/* {listaAeroports.map(aeroporto => <option key={aeroporto} >{aeroporto}</option>)} */}
      </select>
    </div>
  )
}