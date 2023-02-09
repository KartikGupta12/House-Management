import React from 'react';
import LoginRegisterNavbar from "./LoginRegisterNavbar";
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
            <LoginRegisterNavbar/>
            <div className="tab-content">
                <div className="tab-pane active">
                    <form>
                        {/*Email input*/}
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control"/>
                            <label className="form-label" htmlFor="loginName">Email or username</label>
                        </div>

                        {/*Password input*/}
                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control"/>
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                {/*Simple link*/}
                                <Link to="/login">Forgot password?</Link>
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
        </>
    );
}

export default Login;
