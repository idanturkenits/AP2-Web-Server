import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./login/Login";
import Home from "./Home";
import SignUp from "./signup/SignUp";
import Chat from "./chat/Chat";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chat" element={<Chat />} />
        <Route path="*" element={<Navigate replace to="/"/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
