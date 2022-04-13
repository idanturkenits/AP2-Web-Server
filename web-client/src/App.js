import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./login/Login";
import Home from "./Home";
import Signup from "./Signup";
import ChatScreen from "./chat/ChatScreen";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false)
  const notFound = <h1 class="d-flex justify-content-center">404 Page NOT FOUND!</h1>;

  let setIsAuthenticatedFunc = function(a){
    setIsAuthenticated(a)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setIsAuthenticatedFunc={setIsAuthenticatedFunc} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chat" element={isAuthenticated ? <Chat /> : notFound} />
        <Route path="*" element={notFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;