import { Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login/Login";
import { Chat } from "./pages/Chat";
import { WelcomeTo } from "./pages/WelcomeTo/WelcomeTo";
import { Connect } from "./pages/Connect/Connect";
import { Auth } from "./pages/Auth/Auth";
import "./App.css";

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
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
