import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./login/Login";
import Home from "./Home";
import SignUp from "./signup/SignUp";
import ChatScreen from "./chat/ChatScreen";
import {useState} from "react"

function App() {
  let [connectedUser, setConnectedUser] = useState(null)
  const notFound = <h1 className="d-flex justify-content-center">404 Page NOT FOUND!</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setConnectedUser={setConnectedUser} />} />
        <Route path="login" element={<Login setConnectedUser={setConnectedUser} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chat" element={<ChatScreen user={connectedUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;