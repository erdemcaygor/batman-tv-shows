import React from 'react';

import './movie-item.scss';

export const MovieItem = (props) => {
  const { movie } = props;
  return (
    <div className="card shadow">
      <img src={movie.show.image.original} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{movie.show.name}</h5>
        <p dangerouslySetInnerHTML={{ __html: movie.show.summary }} className="card-text" />
        <a href="#" className="btn btn-primary">Go detail</a>
      </div>
    </div>
  )
}
