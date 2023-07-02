import { Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { WelcomeTo } from "./components/WelcomeTo/WelcomeTo";

function App() {
  const user = false;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
