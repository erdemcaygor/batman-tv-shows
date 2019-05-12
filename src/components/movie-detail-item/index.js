import React from 'react';

export const MovieDetailItem = (props) => {

  const { movie } = props;

  return (
    <div className="col-12 flex-column flex-sm-row d-flex">
      <div className="col-12 col-sm-4">
        <img src={movie.image.original} width="100%" />
      </div>
      <div className="col-12 col-sm-8 d-flex flex-column">
        <h4>{movie.name}</h4>
        <p dangerouslySetInnerHTML={{ __html: movie ? movie.summary : '' }} />
        <div className="pt-2">
          <strong>Language: </strong><span>{movie.language}</span>
        </div>
        <div className="pt-2">
          <strong className="pt-2">Genres: </strong><span>{movie.genres.join(',')}</span>
        </div>
      </div>
    </div>
  )
}
