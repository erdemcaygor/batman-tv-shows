import env from '../config';


export class MovieService {

  getMoveList() {
    return new Promise((resolve, reject) => {
      fetch(`${env.API_URL}/search/shows?q=batman`)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getMovieDetail(showId) {
    return new Promise((resolve, reject) => {
      fetch(`${env.API_URL}/shows/${showId}`)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export let movieService = new MovieService();
