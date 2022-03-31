

function Signup() {
    return (
        <div>
            <h1 className="text-center">Sign Up</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputUsername" className="form-label">Username</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputUsername" className="form-label">Nickname</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password Again</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;