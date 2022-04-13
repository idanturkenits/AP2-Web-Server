import LoginForm from "./LoginForm"

function Login({setIsAuthenticatedFunc}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-lg-4 col-md-10 col-sm-12 col-xs-12">
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