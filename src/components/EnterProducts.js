import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import check from "../Controllers/CheckJwt";
import UserContext from "../context/UserContext";

function EnterProducts() {
    const context = useContext(UserContext);
    const {showAlert} = context;
    const history = useNavigate();

    // All use States
    const [details, setDetail] = useState({
        category: "", product_name: "", brand: "", Price: "", Quantity: "", Remaining_quantity: ""
    });
    const [products, setProducts] = useState([]);
    const [unit, setUnit] = useState("");
    const [categories, setCategories] = useState([]);

    const onValueChange = (e) => {
        setDetail({...details, [e.target.name]: e.target.value});
    }

    const onCategorySelect = (e) => {
        setDetail({...details, [e.target.name]: e.target.value});
        const temp = categories.filter(x => x.category === e.target.value);
        setProducts(temp[0].items);
    }

    const onProductSelect = (e) => {
        setDetail({...details, [e.target.name]: e.target.value});
        const temp = products.filter(x => x.name === e.target.value);
        setUnit(temp[0].unit);
    }

    const fetchData = async () => {
        try {
            let response = await fetch("http://localhost:8000/getAllItems");
            let json = await response.json();
            setCategories(json['Items']);
        } catch (error) {
            console.log(error);
        }
    };

    const onDataSubmit = async (e) => {
        e.preventDefault();
        console.log(details);
        // try {
        //     const response = await fetch("http://localhost:5000/enterProduct", {
        //         method: "POST",
        //         headers: {
        //             'content-Type': 'application/json',
        //             'auth-token': localStorage.getItem('token')
        //         },
        //         body: JSON.stringify({
        //             category: details.category,
        //             brand: details.brand,
        //             price: details.price,
        //             name: details.product_name,
        //             newQuantity: details.Quantity,
        //             RemainingQuantity: details.Remaining_quantity
        //         })
        //     });
        //     if (response.status === 200) {
        //         window.alert("Product entered successfully");
        //     }
        //
        // } catch (error) {
        //     console.log(error);
        // }
        setDetail({
            category: "", product_name: "", brand: "", Price: "", Quantity: "", Remaining_quantity: ""
        })
    }
    useEffect(() => {
        if (!localStorage.getItem('authToken'))
            history('/login');
        fetchData().then(() => {});
    });

    return (
        <div className='form-container'>
            <form className="EnterProduct-Form">
                {/*Select Category*/}
                <div className="form-floating mb-3">
                    <select onChange={onCategorySelect} id="category" className="form-select" name="category">
                        <option disabled selected>Select Category</option>
                        {categories.map((data, index) => <option value={data.category}
                                                                 key={index}>{data.category}</option>)}
                    </select>
                    <label htmlFor="category">Category</label>
                </div>

                {/*Select Product*/}
                <div className="form-floating mb-3">
                    <select onChange={onProductSelect} id="product" className="form-select" name="product_name">
                        <option disabled selected>Select Product</option>
                        {products.map((data, index) => <option value={data.name} key={index}> {data.name} </option>)}
                    </select>
                    <label htmlFor="product">Products</label>
                </div>

                {/*Enter Quantity*/}
                <div className="form-floating mb-3">
                    <input type="text" name="Quantity" id="quantity" placeholder='Not Used' onChange={onValueChange}
                           value={details.Quantity}
                           className="form-control"/>
                    <label htmlFor="quantity">Quantity in {unit}</label>
                </div>

                {/*Enter Brand*/}
                <div className="form-floating mb-3">
                    <input type="text" name="brand" id="brand" placeholder='Not Used' value={details.brand}
                           onChange={onValueChange}
                           className="form-control"/>
                    <label htmlFor="brand">Brand</label>
                </div>

                {/*Enter Price*/}
                <div className="form-floating mb-3">
                    <input type="text" name="Price" id="price" placeholder="Not Used" value={details.Price}
                           onChange={onValueChange}
                           className="form-control"/>
                    <label htmlFor="price">Price</label>
                </div>

                {/*Enter Remaining Quantity*/}
                <div className="form-floating mb-3">
                    <input type="text" name="Remaining_quantity" id="remain" value={details.Remaining_quantity}
                           onChange={onValueChange} className="form-control" placeholder='Qunatity left in Home'/>
                    <label htmlFor="remain">Remaining Quantity</label>
                </div>

                {/*Submit Details*/}
                <button type="button" onClick={onDataSubmit} className="btn btn-primary btn-block mb-4">Submit Details
                </button>

            </form>

            <div className='GIFS'>
                <img src={require(`../assets/${details.category || 'Fruits'}.gif`)} alt="GIFS"/>
            </div>
        </div>

    );
}

export default EnterProducts;