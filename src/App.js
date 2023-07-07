import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PageFormatContext, format } from "./context/PageFormatContext";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { Chat } from "./pages/Chat";
import { WelcomeTo } from "./pages/WelcomeTo/WelcomeTo";
import { Connect } from "./pages/Connect/Connect";
import { Auth } from "./pages/Auth/Auth";
import { themes } from "./styles/themes";
import "./App.css";

//axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [pageFormat, setPageFormat] = useState(null);
  const { mobile, tablet, desktop } = themes.breakPoints;
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
          <Route exact path="/" element={<WelcomeTo />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </PageFormatContext.Provider>
    </div>
  );
}

export default App;
