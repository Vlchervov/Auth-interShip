import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const logIn = () => {
  return history.push("/Profile");
};

export const logOut = () => {
  return history.push("/Authorization");
};
