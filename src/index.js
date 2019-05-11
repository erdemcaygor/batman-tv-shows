// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './modules/store'
import './styles/main.scss';

import Home from './containers/home';
import Base from './containers/base';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { }
      <Base> { }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => (<div>Miss</div>)} />
        </Switch>
      </Base>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
