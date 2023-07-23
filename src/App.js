import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PageFormatContext, format } from "./context/PageFormatContext";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { Chat } from "./pages/Chat";
import { WelcomeTo } from "./pages/WelcomeTo/WelcomeTo";
import { Connect } from "./pages/Connect/Connect";
import { Auth } from "./pages/Auth/Auth";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { SendRequest } from "./pages/SendRequest/SendRequest";
import { ConfirmPassword } from "./pages/ConfirmPassword/ConfirmPassword";
import { themes } from "./styles/themes";
import { authSelectors } from "./redux/auth";
import "./App.css";

//axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [pageFormat, setPageFormat] = useState(null);
  const { mobile, tablet, desktop } = themes.breakPoints;
  const dispatch = useDispatch();
  const firstLoading = useRef(true);
  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
  }, []);

  /*useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);*/

  const user = false;

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
          <Route exact path="/" element={<WelcomeTo />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/sendRequest" element={<SendRequest />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </PageFormatContext.Provider>
    </div>
  );
}

export default App;
