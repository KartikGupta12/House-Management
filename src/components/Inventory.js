import React, {useContext, useEffect, useState} from 'react';
import Acordion from './Acordion.js';
import UserContext from "../context/UserContext";
import check from "../Controllers/CheckJwt";
import GetProductsDetails from "../Controllers/GetProductsDetails";

function Inventory() {
    const context = useContext(UserContext);
    const {FlipLoginStats} = context;
    const [Products, setProducts] = useState([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (!token) FlipLoginStats(false);
        check(token).then((res) => {
            if (!res) FlipLoginStats(false);
            else {
                FlipLoginStats(true);
                GetProductsDetails().then(data => {
                    setProducts(data);
                });
            }
        });
    }, []);
    const acordionNum = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    return (
        <>
            {
                Products.map((data, index) =>
                    <Acordion key={index} category={data.category} details={data.product} number={acordionNum[index]}/>
                )
            }
        </>
    );
}

export default Inventory;