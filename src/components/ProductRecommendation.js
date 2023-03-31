import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function ProductRecommendation(props) {
    const history = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('authToken'))
            history('/login');
    }, []);
    return (
        <div>Products Recommendations</div>
    );
}

export default ProductRecommendation;