import React, {useContext, useEffect, useState} from 'react';
import check from "../Controllers/CheckJwt";
import UserContext from "../context/UserContext";

function EnterProducts() {
    const context = useContext(UserContext);
    const {FlipLoginStats, allDetails, setCompleteDetails} = context;
    const token = localStorage.getItem('authToken');
    // All use States
    const [details, setDetail] = useState({
        category: "", product_name: "", brand: "", price: "", Quantity: "", Remaining_quantity: ""
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
        if (!allDetails) {
            try {
                let response = await fetch("http://localhost:8000/getAllItems");
                let json = await response.json();
                setCategories(json['Items']);
                setCompleteDetails(json['Items']);
            } catch (error) {
                console.log(error);
            }
        } else {
            setCategories(allDetails);
        }
    };

    const onDataSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/product", {
                method: "POST",
                headers: {
                    'content-Type': 'application/json',
                    authToken: localStorage.getItem('authToken')
                },
                body: JSON.stringify({
                    'category': details.category,
                    'brand': details.brand,
                    'price': Number(5),
                    'name': details.product_name,
                    'newQuantity': Number(details.Quantity),
                    'currentQuantity': Number(details.Remaining_quantity)
                })
            });
            const json = await response.json();
            console.log(json);

        } catch (error) {
            console.log(error);
        }
        // setDetail({
        //     category: "", product_name: "", brand: "", Price: "", Quantity: "", Remaining_quantity: ""
        // })
    }

    useEffect(() => {
        if (!token) {
            FlipLoginStats(false);
        }
        check(token).then((res) => {
            if (!res) {
                FlipLoginStats(false);
            } else {
                FlipLoginStats(true);
                fetchData().then(() => {
                });
            }
        });
    }, []);

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
        </div>

);
}

export default EnterProducts;