import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

import { setMovieList } from '../../modules/actions/movieActions';
import { movieService } from '../../services';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props.updateMovieList([]);
    movieService.getMoveList()
      .then(res => {
        this.props.updateMovieList(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props.movies);
    return (
      <div>
        <span>test</span>
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
