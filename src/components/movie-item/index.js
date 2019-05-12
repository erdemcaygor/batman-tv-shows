import React from 'react';
import { Link } from 'react-router-dom';
import './movie-item.scss';

export const MovieItem = (props) => {
  const { movie } = props;
  const path = movie && movie.show ? `/show-detail/${movie.show.id}` : '/';
  return (
    <div className="card shadow">
      <img src={movie.show.image.original} className="card-img-top img-responsive" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{movie.show.name}</h5>
        <p dangerouslySetInnerHTML={{ __html: movie && movie.show ? movie.show.summary : '' }} className="card-text text-truncate" />
        <Link to={path} className="btn btn-primary">Go detail</Link>
      </div>
    </div>
  )
}
