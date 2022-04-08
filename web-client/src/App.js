import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import ChatScreen from "./chat/ChatScreen";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="chat" element={<ChatScreen />} />


    </Routes>
  </BrowserRouter>
  );
}

export default App;
