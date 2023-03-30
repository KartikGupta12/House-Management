import React, { useContext, useEffect, useState } from 'react';

function EnterProducts(props) {
    const [details, setDetail] = useState({ category: "", product_name: "", brand: "", Price: "", Quantity: "", Remaining_quantity: "" });
    const onchange = (e) => {

        console.log(e.target.name);
        console.log(e.target.value);
        setDetail({ ...details, [e.target.name]: e.target.value });
    }

    const onsubmit = async (e) => {

        console.log(details.gender);
        e.preventDefault();
        try {

            const response = await fetch("https://hostelmanagementlnm.herokuapp.com/api/addstudent", {
                method: "POST",
                headers: {
                    'content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ category: details.category, brand: details.brand, price: details.price, name: details.product_name, newQuantity: details.Quantity, RemainingQuantity: details.Remaining_quantity })
            });
            if (response.status == 200) {

                window.alert("Product entered successfully");
            }

        }
        catch (error) {
            console.log(error);
        }

        setDetail({ category: "", product_name: "", brand: "", Price: "", Quantity: "", Remaining_quantity: "" });
    }



    return (



        <>
            <div>

                <form className='form1' onsubmit={onsubmit}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><h5>Category</h5></label>
                        <select className="form-select" aria-label="Default select example" onChange={onchange} name="category">
                            <option selected>Open this select menu</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Bathroom">Bathroom</option>
                            <option value="Stationary">Stationary</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><h5>Products</h5></label>
                        <select className="form-select" aria-label="Default select example" value={details.product_name} onChange={onchange} name="prdouct_name">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label><h5>Quantity</h5></label>
                        <input type="text" name="Quantity" value={details.Quantity} onChange={onchange} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label><h5>Brand</h5></label>
                        <input type="text" name="brand" value={details.brand} onChange={onchange} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label><h5>Price</h5></label>
                        <input type="text" name="Price" value={details.Price} onChange={onchange} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label><h5>Remaining Quantity</h5></label>
                        <input type="text" name="Remaining_quantity" value={details.Remaining_quantity} onChange={onchange} className="form-control" placeholder='Qunatity left in your Home' />
                    </div>
                    <button type="submit" className="button1">Submit</button>
                </form>


            </div>
            {/* please dont uncomment it it is important for kartik */}

            {/* please dont uncomment it it is important for kartik */}
            {/* please dont uncomment it it is important for kartik */}
            {/* please dont uncomment it it is important for kartik */}
            {/* please dont uncomment it it is important for kartik */}



            {/* <div className='app'>
                <form action="" className='form2'>
                    <h1>Enter Products</h1>
                    <div className='forminput'>
                        <label htmlFor="" className='label1'>username</label>
                        <input type="email" className='input1' />
                    </div>
                    <div className='forminput'>
                    <label htmlFor=""className='label1'>username</label>
                        <input type="text" className='input1' />
                    </div>
                    <div className='forminput'>
                    <label htmlFor=""className='label1'>username</label>
                        <input type="text"className='input1'  />
                    </div>
                    <div className='forminput'>
                    <label htmlFor=""className='label1'>username</label>
                        <input type="text" className='input1' />
                    </div>
                    <button type="submit" className="button1">Submit</button>
                </form>
            </div> */}
        </>
    );
}

export default EnterProducts;