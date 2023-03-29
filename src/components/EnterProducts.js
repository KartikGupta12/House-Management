import React,{ useContext, useEffect, useState } from 'react';

function EnterProducts(props) {
    const [details,setDetail]=useState({category:"",product_name:"",brand:"",Price:"",Quantity:"",Remaining_quantity:""});
    const onchange=(e)=>{
    
        console.log(e.target.name);
        console.log(e.target.value);
        setDetail({...details,[e.target.name]:e.target.value});
      }

    return (

        

        <>
            <form  className='form1'>
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
                    <input type="text" name="Price"value={details.Price} onChange={onchange} className="form-control" />
                </div>
                
                <div className="form-group mb-3">
                    <label><h5>Remaining Quantity</h5></label>
                    <input type="text" name="Remaining_quantity" value={details.Remaining_quantity} onChange={onchange} className="form-control" placeholder='Qunatity left in your Home'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

           
        </>
    );
}

export default EnterProducts;