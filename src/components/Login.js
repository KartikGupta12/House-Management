import React from 'react';
import LoginRegisterNavbar from "./LoginRegisterNavbar";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="loginContainer">
            <div className="image">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image"/>
            </div>
            <div>
                <LoginRegisterNavbar/>
                <div className="tab-content">
                    <div className="tab-pane active">
                        <form>
                            {/*Email input*/}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput"
                                       placeholder="Email address"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            {/*Password input*/}
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <Link to="/login"></Link>
                                </div>
                            </div>

                            {/*Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                            {/*Register buttons */}
                            <div className="text-center">
                                <p>Not a member? <Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
