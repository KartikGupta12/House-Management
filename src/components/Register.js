import React, {useState} from 'react';
import LoginRegisterNavbar from "./LoginRegisterNavbar";

function Register() {
    const server = "http://localhost:8000/";
    const [data, setData] = useState({ name:"", email: "", password: "", confirmPassword: ""});
    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const  handleSubmit = async (event) => {
        let res = await fetch(server + 'user/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        await res.json();
    };


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
                            {/*Name input*/}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name"
                                       onChange={handleChange} placeholder="Name" name="name"/>
                                <label htmlFor="name">Name</label>
                            </div>

                            {/*Email input*/}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="email"
                                       onChange={handleChange} placeholder="Email address" name="email"/>
                                <label htmlFor="email">Email address</label>
                            </div>

                            {/*Password input*/}
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password"
                                       onChange={handleChange} placeholder="Password" name="password"/>
                                <label htmlFor="password">Password</label>
                            </div>

                            {/*Repeat Password input*/}
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="confirmPassword"
                                       onChange={handleChange} placeholder="Password"  name="confirmPassword"/>
                                <label htmlFor="confirmPassword">Repeat Password</label>
                            </div>

                            {/*Submit button */}
                            <button onClick={handleSubmit} type="button" className="btn btn-primary btn-block mb-3">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
