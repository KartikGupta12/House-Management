import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Acordion from './Acordion.js';

function Inventory() {
    const history = useNavigate();
    const [Products, setProducts] = useState([]);
    const token = localStorage.getItem('authToken');
    const fetchData = async () => {
        try {
            let response = await fetch("http://localhost:8000/product", {
                method: 'GET',
                headers: {authToken: token}
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    };
    const getuniquecategories = (details) => {
        return [
            ...new Set(details.map((element) => element.category)),
        ];
    }
    const makeitems = (unique_categories, details) => {
        let items = [];
        for (let i = 0; i < unique_categories.length; i++) {
            let obj = {
                category: unique_categories[i],
                product: []
            };
            for (let j = 0; j < details.length; j++) {
                let obj2 = {};
                if (details[j].category === unique_categories[i]) {
                    obj2 = Object.assign(obj2, details[j]);
                    obj.product.push(obj2);
                }
            }
            items.push(obj);
        }
        setProducts(items);
    }
    useEffect(() => {
        if (!localStorage.getItem('authToken'))
            history('/login');
        fetchData().then((data) => {
            const temp = data['Inventory'];
            const temp2 = getuniquecategories(temp);
            makeitems(temp2, temp);
        });
    }, []);
    const acordionNum = ["One", "Two", "Three", "Four","Five","Six","Seven","Eight","Nine","Ten"];
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