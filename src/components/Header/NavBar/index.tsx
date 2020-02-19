import React from 'react';

import OriginAirPort from './OriginAirPort';
import DestinyAirPort from './DestinyAirPort';
import DateTravel from './DateTravel';
import ConfirmButton from './ConfirmButton';

export default function NavBar() {

  return (
    <div className="nav-bar">
      <OriginAirPort />
      <DestinyAirPort />
      <DateTravel />
      <ConfirmButton />
    </div>
  )
}