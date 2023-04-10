import React, {useContext, useEffect, useState} from 'react';
import check from "../Controllers/CheckJwt";
import UserContext from "../context/UserContext";
import BarChar from "./Graphs/BarChar";
import PieChart from "./Graphs/PieChart";
import GetProductsDetails from "../Controllers/GetProductsDetails";

function Graphs() {
    const [labels, setLabels] = useState([]);
    const [series, setSeries] = useState([]);
    const context = useContext(UserContext);
    const {FlipLoginStats} = context;
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (!token) FlipLoginStats(false);
        check(token).then((res) => {
            if (!res) FlipLoginStats(false);
            else {
                FlipLoginStats(true);
                GetProductsDetails(token).then(data => {
                    setSeries([]);
                    setLabels([]);
                    for (const ele of data) {
                        setLabels(prev => [...prev, ele['category']]);
                        let sum = 0;
                        for (const product of ele['product']) sum += product['price'];
                        setSeries(prev => [...prev, sum]);
                    }
                });
            }
        });
    }, []);

    return (
        <>
            <PieChart labels={labels} series={series} title={'Monthly expenditure category wise'}/>
        </>
    );
}

export default Graphs;