
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute } from '../const';

 type PrivateRouteProps = RouteProps & {
   render: () => JSX.Element;
 }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  // eslint-disable-next-line no-console
  console.log(render);
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (<Redirect to={AppRoute.SignIn} />)}
    />
  );
}

export default PrivateRoute;
