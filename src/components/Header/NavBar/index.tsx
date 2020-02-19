import React from 'react';

import OriginAirPort from './OriginAirPort';
import DestinyAirPort from './DestinyAirPort';
import DateTravel from './DateTravel';

export default function NavBar() {

  return (
    <div className="nav-bar">
      <OriginAirPort />
      <DestinyAirPort />
      <DateTravel />
    </div>
  )
}