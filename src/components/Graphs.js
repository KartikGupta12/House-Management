import React, {useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import check from "../Controllers/CheckJwt";
import UserContext from "../context/UserContext";

function Graphs() {
    const context = useContext(UserContext);
    const {showAlert} = context;
    const history = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('authToken') || !check(localStorage.getItem('authToken'))) {
            showAlert('Please Login', 'danger');
            history('/login');
        }
    }, []);

    return (
        <h1>Show Graphs</h1>
    );
}

export default Graphs;