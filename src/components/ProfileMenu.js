import React from 'react';
import profilePic from "../assets/profilePic.png";

function ProfileMenu(props) {
    return (
        <div className="dropdown-center" data-bs-theme="dark">
            <button className=" btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                <img width="30" className="mx-2" src={profilePic} alt="logo"/>
                <span className="text-light user-select-none" role="button">Chirag_kalwani</span>
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><span className="dropdown-item" role="button">Logout</span></li>
            </ul>
        </div>
    );
}

export default ProfileMenu;