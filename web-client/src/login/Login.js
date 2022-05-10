import LoginForm from "./LoginForm"

function Login({setConnectedUser , setPage}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-lg-4 col-md-10 col-sm-12 col-xs-12">
            <LoginForm setConnectedUser={setConnectedUser} setPage={setPage}/>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;