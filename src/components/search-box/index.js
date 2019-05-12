import React from 'react';

import './search-box.scss';

export const SearchBox = (props) => {
  return (
    <div className="active-cyan-4 mb-4 shadow">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
    </div>
  )
}
