import React, { Component } from 'react';
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import { history } from './modules/store'

import Home from './containers/home';
import Base from './containers/base';
import ShowDetail from './containers/show-detail';

class App extends Component {

    render() {
      return (
        <ConnectedRouter history={history}> { }
          <Base> { }
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/show-detail/:id" component={ShowDetail}/>
            </Switch>
          </Base>
        </ConnectedRouter>
      )
    }
}

export default App;
