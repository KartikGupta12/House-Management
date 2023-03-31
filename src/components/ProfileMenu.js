import React, {useContext} from 'react';
import profilePic from "../assets/profilePic.png";
import {Link, useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";

function ProfileMenu() {
    const context = useContext(UserContext);
    const history = useNavigate();
    const {showAlert} = context;
    const handleClick = () => {
        localStorage.removeItem('authToken');
        showAlert('Logged out successfully', 'success');
        history('/login');
    }
    return (
        <>
            {localStorage.getItem('authToken') && <div className="dropdown-center" data-bs-theme="dark">
                <button className=" btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                    <img width="30" className="mx-2" src={profilePic} alt="logo"/>
                    <span className="text-light user-select-none" role="button">Chirag_kalwani</span>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><span onClick={handleClick} className="dropdown-item" role="button">Logout</span></li>
                </ul>
            </div>}
            {!localStorage.getItem('authToken') &&
                <Link to='./login' type="button" className="btn btn-primary btn-block">Log in / Register</Link>
            }
        </>
    );
}

export default ProfileMenu;