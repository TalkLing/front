import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { Chat } from "./pages/Chat";
import { WelcomeTo } from "./pages/WelcomeTo/WelcomeTo";
import { Connect } from "./pages/Connect/Connect";
import { Auth } from "./pages/Auth/Auth";
import "./App.css";

//axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const user = false;

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<WelcomeTo />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
