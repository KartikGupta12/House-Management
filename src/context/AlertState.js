import UserContext from "./UserContext";

import {useState} from "react";

const AlertState = ({children}) => {
    const [alert, setAlert] = useState({show: false, msg: 'this is error', type: 'success'});

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


    return (
        <UserContext.Provider
            value={{
                alert, showAlert
            }}>
            {children}
        </UserContext.Provider>
    )
};

export default AlertState;
