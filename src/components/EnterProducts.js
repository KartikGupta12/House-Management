import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
function EnterProducts(props) {
    const history = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('authToken'))
            history('/login');
    }, []);
    const [details, setDetail] = useState({
        category: "",
        product_name: "",
        brand: "",
        Price: "",
        Quantity: "",
        Remaining_quantity: ""
    });
    const [products, setProducts] = useState([]);
    const [unit,setUnit] = useState([]);
    const [categories, setCategories] = useState([]);
    const onchange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDetail({...details, [e.target.name]: e.target.value});
    }
    const handlechange = (e) => {
        const temp = categories.filter(x => x.category === e.target.value);
        setProducts(temp[0].items);
    }
    const onhandlechangeporduct = (e) => {
        const temp=products.filter(x=>x.name===e.target.value);
        setUnit(temp[0].unit);
    }
    const fetchData = async () => {
        try {
            let response = await fetch("http://localhost:8000/getAllItems");
            let json = await response.json();
            setCategories(json.Items);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const onsubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/enterProduct", {
                method: "POST",
                headers: {
                    'content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({
                    category: details.category,
                    brand: details.brand,
                    price: details.price,
                    name: details.product_name,
                    newQuantity: details.Quantity,
                    RemainingQuantity: details.Remaining_quantity
                })
            });
            if (response.status === 200) {
                window.alert("Product entered successfully");
            }

        } catch (error) {
            console.log(error);
        }
        setDetail({category: "", product_name: "", brand: "", Price: "", Quantity: "", Remaining_quantity: ""});
    }
    return (
        <>
            <div className='form-container'>
                <form className='form1' onSubmit={onsubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><h5>Category</h5></label>
                        <select onChange={handlechange} className="form-select" aria-label="Default select example"
                                name="category">
                            <option value="" disabled selected>Select your option</option>
                            {
                                categories.map((data, index) => {
                                    return (
                                        <option value={data.category} key={index}>{data.category}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><h5>Products</h5></label>
                        <select onChange={onhandlechangeporduct} className="form-select" aria-label="Default select example" name="prdouct_name">
                            <option value="" disabled selected>Select your option</option>
                            {
                                products.map((data, index) => {
                                    return (
                                        <option value={data.name} key={index}>{data.name}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label><h5>Quantity</h5></label>
                        <input type="text" name="Quantity" value={details.Quantity} onChange={onchange}
                           placeholder={unit}    className="form-control"/>
                    </div>

                    <div className="form-group mb-3">
                        <label><h5>Brand</h5></label>
                        <input type="text" name="brand" value={details.brand} onChange={onchange}
                               className="form-control"/>
                    </div>

                    <div className="form-group mb-3">
                        <label><h5>Price</h5></label>
                        <input type="text" name="Price" value={details.Price} onChange={onchange}
                               className="form-control"/>
                    </div>

                    <div className="form-group mb-3">
                        <label><h5>Remaining Quantity</h5></label>
                        <input type="text" name="Remaining_quantity" value={details.Remaining_quantity}
                               onChange={onchange} className="form-control" placeholder='Qunatity left in Home'/>
                    </div>
                    <button type="submit" className="button1">Submit</button>
                </form>
            </div>
        </>
    );
}
export default EnterProducts;