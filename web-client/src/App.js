import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./login/Login";
import Home from "./Home";
import SignUp from "./signup/SignUp";
import Chat from "./chat/Chat";
import {useState} from "react"
import authUser from "./login/authUser";

function App() {
  const notFound = <h1 class="d-flex justify-content-center">404 Page NOT FOUND!</h1>;
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chat" element={true?<Chat />:notFound} />
        <Route path="*" element={notFound} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
