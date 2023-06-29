import { Routes, Route, Navigate } from "react-router-dom";
import { Registration } from "../pages/Registration";
import { Login } from "../pages/Login";
import { Chat } from "../pages/Chat";
import { privateRoutes, publicRoutes } from "../routes/routes";
import { CHAT_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export const AppRouter = (params) => {
  const user = false;

  return user ? (
    <div>
      <Routes>
        {privateRoutes.map(({ path, Component }) => (
          <Route path={path} element={Component} exact={true} />
        ))}
        {/*<Link to={CHAT_ROUTE} />*/}
      </Routes>
      <Navigate to={CHAT_ROUTE} />
    </div>
  ) : (
    <>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={Component} exact={true} />
        ))}
        {/*<Link to={REGISTRATION_ROUTE} />*/}
      </Routes>

      <Navigate to={REGISTRATION_ROUTE} />
    </>
  );
};
