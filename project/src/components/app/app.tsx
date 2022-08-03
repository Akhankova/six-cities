import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../../private-route/private-route';
import { offersMocks } from '../../types/offers';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../no-found/no-found';
import Property from '../property/property';
import Welcome from '../welcome/welcome';


type AppProps = {
  offers: offersMocks[];
}

function App(props: AppProps): JSX.Element {
  const { offers } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Welcome offers={offers} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Property />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
