import env from '../config';


export class MovieService {

  getMoveList() {
    return new Promise((resolve, reject) => {
      fetch(env.API_URL)
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
