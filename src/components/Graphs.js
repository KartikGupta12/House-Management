import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Graphs() {
    const history = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('authToken'))
            history('/login');
    }, []);

    return (
        <div>Graphs</div>
    );
}

export default Graphs;