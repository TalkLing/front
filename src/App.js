import { Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { WelcomeTo } from "./pages/WelcomeTo/WelcomeTo";
import { Connect } from "./pages/Connect/Connect";
import "./App.css";

function App() {
  const user = false;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeTo />} />
        <Route exact path="/connect" element={<Connect />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
