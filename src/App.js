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
  ErrorPage,
  SendRequest,
  ConfirmPassword,
} from "pages";
import { themes } from "styles/themes";
import { authSelectors } from "redux/auth";
import { Context } from "./index";
import { Layot, Channels, AboutChannel, Settings, Members } from "components";
import "./App.css";

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
        {userAuth === true || user ? (
          <Routes>
            <Route
              path="/registration"
              element={shouldRedirect && <Navigate replace to="/chat" />}
            />
            <Route exact path="/" element={<WelcomeTo />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Layot />}>
              <Route path="about" element={<AboutChannel />} />
              <Route path="settings" element={<Settings />} />
              <Route path="members" element={<Members />} />
            </Route>
            <Route path="/channels" element={<Channels />} />
            <Route path="/sendRequest" element={<SendRequest />} />
            <Route path="/confirmPassword" element={<ConfirmPassword />} />
            {/*<Route path="/*" element={<ErrorPage />} />*/}
          </Routes>
        ) : (
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route exact path="/" element={<WelcomeTo />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sendRequest" element={<SendRequest />} />
            <Route path="/confirmPassword" element={<ConfirmPassword />} />
            <Route
              path="/chat"
              element={
                shouldRedirect && <Navigate replace to="/registration" />
              }
            />
          </Routes>
        )}
      </PageFormatContext.Provider>
    </div>
  );
}

export default App;
