import React, {useContext, useEffect, useState} from 'react';
import check from "../Controllers/CheckJwt";
import UserContext from "../context/UserContext";
import PieChart from "./Graphs/PieChart";
import GetProductsDetails from "../Controllers/GetProductsDetails";
import Table from "./Tables/Table";

function Graphs() {
    const [labels, setLabels] = useState([]);
    const [series, setSeries] = useState([]);
    const colors = ['rgb(0, 143, 251)', 'rgb(0, 227, 150)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', 'rgb(0, 143, 251)', 'rgb(0, 227, 150)'];
    const context = useContext(UserContext);
    const {FlipLoginStats, setCompleteData, data} = context;
    const token = localStorage.getItem('authToken');
    const setData = (data) => {
        setSeries([]);
        setLabels([]);
        for (const ele of data) {
            setLabels(prev => [...prev, ele['category']]);
            let sum = 0;
            for (const product of ele['product']) sum += product['price'];
            setSeries(prev => [...prev, sum]);
        }
    };
    useEffect(() => {
        if (!token) FlipLoginStats(false);
        check(token).then((res) => {
            if (!res) FlipLoginStats(false);
            else {
                FlipLoginStats(true);
                if (!data) {
                    GetProductsDetails(token).then(data => {
                        setCompleteData(data);
                        setData(data);
                    });
                } else {
                    setData(data);
                }
            }
        });
    }, []);
    return (
        <>
            <div className="Graph">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 col-md-12">
                        <PieChart colors={colors} labels={labels} series={series}
                                  title={'Monthly expenditure category wise'}/>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <Table labels={labels} colors={colors} series={series}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Graphs;