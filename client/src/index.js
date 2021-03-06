import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/* Styles */
import './styles/index.scss';
/* Pages */
import Home from './pages/Home';
import Vote from './pages/Vote';
import Thanks from './pages/Thanks';
import Results from './pages/Results';
/* Redux */
import { configureStore, history } from './store';
/* Store & Sentry Config */
const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/vote'} component={Vote} />
          <Route exact path={'/thanks'} component={Thanks} />
          <Route exact path={'/results'} component={Results} />
          <Route exact path="*" render={() => <Redirect to={'/'} />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
