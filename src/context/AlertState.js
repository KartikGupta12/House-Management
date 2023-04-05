import UserContext from "./UserContext";

import {useState} from "react";

const AlertState = ({children}) => {
    const [alert, setAlert] = useState({show: false, msg: 'this is error', type: 'success'});
    const [isLogin, setIsLogin] = useState(false);

    const showAlert = (msg, type) => {
        setAlert({
            show: true, msg: msg, type: type
        });
        setTimeout(() => {
            setAlert({
                show: false, msg: '', type: ''
            })
        }, 2000);
    }

    const FlipLoginStats = async (stats) => {
        if (!stats) localStorage.removeItem('authToken');
        setIsLogin(stats);
        if (!stats) window.location.href = '/';
    }

    return (
        <UserContext.Provider
            value={{
                alert, isLogin,
                showAlert, FlipLoginStats
            }}>
            {children}
        </UserContext.Provider>
    )
};

export default AlertState;
