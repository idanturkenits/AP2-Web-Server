import LoginForm from "./LoginForm"

function Login({setIsAuthenticatedFunc}) {
  return (
    <div>
      <h1 className="text-center">Log In</h1>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
            <LoginForm setIsAuthenticatedFunc={setIsAuthenticatedFunc}/>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;