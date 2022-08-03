
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute } from '../const';


 type SignInPrivateRouteProps = RouteProps & {
   render: () => JSX.Element;
 }

function SignInPrivateRoute(props: SignInPrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  // eslint-disable-next-line no-console
  console.log(render);
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (<Redirect to={AppRoute.Main} />
      )}
    />
  );
}

export default SignInPrivateRoute;
