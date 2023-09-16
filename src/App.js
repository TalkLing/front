import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
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
  ErrorPage,
} from "pages";
import { themes } from "styles/themes";
import {
  PrivateRoute,
  RestrictedRoute,
  SharedLayout,
  Channels,
} from "components";
import "./App.css";
//axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [pageFormat, setPageFormat] = useState(null);
  const { mobile, tablet, desktop } = themes.breakPoints;
  const firstLoading = useRef(true);

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
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sendRequest" element={<SendRequest />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          <Route path="/connect" element={<Connect />} />

          <Route exact path="/" element={<WelcomeTo />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/channels" element={<Channels />} />

          <Route path="/" element={<SharedLayout />}>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </PageFormatContext.Provider>
    </div>
  );
}

export default App;
