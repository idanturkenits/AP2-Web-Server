import SignUpForm from './SignUpForm'
function SignUp({setPage}) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-2 col-sm-0 col-xs-0">
                    </div>
                    <div className="col-lg-4 col-md-10 col-sm-12 col-xs-12">
                        <SignUpForm setPage={setPage}/>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-0 col-xs-0">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;