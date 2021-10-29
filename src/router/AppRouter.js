import { Redirect, Route, Router, Switch } from "react-router";
import { history } from "../components/History";
import AuthForm from "../pages/AuthForm";
import ProfileApp from "../pages/Profile";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/Authorization"} component={AuthForm} />
        <Route path={"/Profile"} component={ProfileApp} />
        <Redirect from="/" to={"/Authorization"} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
