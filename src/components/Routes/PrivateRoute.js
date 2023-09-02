import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export const PrivateRoute = ({ component, path = "/login" }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate replace to={path} />;
  }

  return component;
};

export const RestrictedRoute = ({ component, path = "/chat" }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate replace to={path} />;
  }

  return component;
};
