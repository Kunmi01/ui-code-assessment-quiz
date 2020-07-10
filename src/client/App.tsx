import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';

import routes from './routes';
import GlobalStyle from './globalStyles';
import * as S from './AppStyles';

export const App: React.FC = () => (
  <S.AppContainer>
    <GlobalStyle />
    <Header />
    <Router>
      <Switch>
        {routes.map((route: any) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={() => <route.component />}
          />
        ))}
        <Redirect to="/quiz" />
      </Switch>
    </Router>
  </S.AppContainer>
);
