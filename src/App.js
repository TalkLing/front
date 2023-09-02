import { useState, useEffect, useRef, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { PageFormatContext, format } from "./context/PageFormatContext";
import {
  Registration,
  Login,
  Chat,
  WelcomeTo,
  Connect,
  Auth,
  SendRequest,
  ConfirmPassword,
} from "pages";
import { themes } from "styles/themes";
import { authSelectors } from "redux/auth";
import { Context } from "./index";
import "./App.css";
import { PrivateRoute, RestrictedRoute } from "components/Routes/PrivateRoute";

//axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [pageFormat, setPageFormat] = useState(null);
  const { mobile, tablet, desktop } = themes.breakPoints;
  const dispatch = useDispatch();
  const firstLoading = useRef(true);
  const isLoadingUser = useSelector(authSelectors.getLoadingUser);
  const userAuth = useSelector(authSelectors.getIsLoggedIn);
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  const shouldRedirect = true;

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    const onHandleResize = () => {
      const viewport = window.innerWidth;

      if (
        viewport < Number.parseInt(mobile) &&
        pageFormat !== format.response
      ) {
        setPageFormat(format.response);
        return;
      }
      if (
        viewport >= Number.parseInt(mobile) &&
        viewport < Number.parseInt(tablet) &&
        pageFormat !== format.mobile
      ) {
        setPageFormat(format.mobile);
        return;
      }
      if (
        viewport >= Number.parseInt(tablet) &&
        viewport < Number.parseInt(desktop) &&
        pageFormat !== format.tablet
      ) {
        setPageFormat(format.tablet);
        return;
      }
      if (
        viewport >= Number.parseInt(desktop) &&
        pageFormat !== format.desktop
      ) {
        setPageFormat(format.desktop);
        return;
      }
    };
    window.addEventListener("resize", onHandleResize);
    onHandleResize();
  }, [pageFormat]);

  return (
    <div className="App">
      <PageFormatContext.Provider value={pageFormat}>
        <Routes>
          <Route
            path="/registration"
            element={<RestrictedRoute component={<Registration />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<Login />} />}
          />
          <Route
            path="/auth"
            element={<RestrictedRoute component={<Auth />} />}
          />
          <Route
            path="/sendRequest"
            element={<RestrictedRoute component={<SendRequest />} />}
          />
          <Route
            path="/confirmPassword"
            element={<RestrictedRoute component={<ConfirmPassword />} />}
          />
          <Route
            path="/connect"
            element={<RestrictedRoute component={<Connect />} />}
          />

          <Route path="/chat" element={<PrivateRoute component={<Chat />} />} />

          <Route exact path="/" element={<WelcomeTo />} />

          {/* <Route path="admin" element={<AdminMenu />}>
            <Route index element={<AdminAccountPage />} />
            <Route path="reviews" element={<ReviewPage />} />
            <Route path="transactions" element={<TransactionPage />} />
          </Route> */}
        </Routes>
      </PageFormatContext.Provider>
    </div>
  );
}

export default App;
