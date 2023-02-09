import React from 'react';
import LoginRegisterNavbar from "./LoginRegisterNavbar";

function Register() {
    return (
        <>
            <LoginRegisterNavbar/>
            <div className="tab-content">
                <div className="tab-pane active">
                    <form>
                        {/*Name input */}
                        <div className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control"/>
                            <label className="form-label" htmlFor="registerName">Name</label>
                        </div>

                        {/*Username input */}
                        <div className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control"/>
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                        </div>

                        {/*Email input */}
                        <div className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control"/>
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>

                        {/*Password input */}
                        <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control"/>
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>

                        {/*Repeat Password input*/}
                        <div className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control"/>
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>

                        {/*Submit button */}
                        <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
