import React from 'react';
import { Component } from 'react';

import { movieService } from '../../services';
import { MovieDetailItem } from '../../components';

class ShowDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetail: null
    };
    this.getShowDetail();
  }

  getShowDetail() {
    const params = this.props.match.params;
    if (params && params.id !== null && params.id !== undefined) {
      const { id } = params;
      movieService.getMovieDetail(id)
        .then(res => {
          this.setState({showDetail: res});
        })
        .catch(err => {
          //
        })
    }
  }

  render() {
    return (
      <div className="shadow p-2">
       {this.state.showDetail &&
         <MovieDetailItem movie={this.state.showDetail} />
       }
      </div>
    )
  }
}

export default ShowDetail;
