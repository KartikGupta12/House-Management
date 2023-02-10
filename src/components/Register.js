import React from 'react';
import LoginRegisterNavbar from "./LoginRegisterNavbar";

function Register() {
    return (
        <div className="loginContainer">
            <div className="image">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                     className="img-fluid" alt="Sample image"/>
            </div>
            <div className="register">
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
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            {/*Repeat Password input*/}
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="rPassword" placeholder="Password"/>
                                <label htmlFor="rPassword">Repeat Password</label>
                            </div>

                            {/*Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
