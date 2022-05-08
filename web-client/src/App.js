import './App.css';
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import ChatScreen from "./chat/ChatScreen";
import {useState} from "react"

function App() {
  let [connectedUser, setConnectedUser] = useState(null)
  let [page,setPage] = useState(1);

  const notFound = <h1 className="d-flex justify-content-center">404 Page NOT FOUND!</h1>;

  switch (page) {
    case 1:
      return <Login setConnectedUser={setConnectedUser} setPage={setPage} />;
      break;
    case 2:
      return <SignUp setPage={setPage}/>;
      break;
    case 3:
      return <ChatScreen user={connectedUser} setPage={setPage}/>;
      break;
    default:
      return <h1>Not Found</h1>;
  }
}

export default App;