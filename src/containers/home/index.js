import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

import { setMovieList } from '../../modules/actions/movieActions';
import { movieService } from '../../services';
import { MovieItem } from '../../components';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pending: false
    };

    movieService.getMoveList()
      .then(res => {
        this.props.updateMovieList(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const movies = this.props.movies;
    const { pending } = this.state;
    return (
      <div className="py-4">
        <div className="col-12 pl-4">
          <h4>Batman Tv Shows:</h4>
        </div>
        <div className="col-12 flex-row d-flex flex-wrap">
          {pending &&
            <div className="text-center">
              <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          }
          {movies.list.map((movie, index) => (
            <div className="py-2 col-12 col-sm-6 col-md-3" key={index}>
              <MovieItem movie={movie} />
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateMovieList: movieList => dispatch(setMovieList(movieList))
});

const mapStateToProps = (state) => {
  const { movies } = state;
  return {
    movies
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
