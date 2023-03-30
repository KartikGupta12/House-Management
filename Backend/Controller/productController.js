const productModel = require('../Model/userProducts');

module.exports.createProduct = async function createProduct(req,res){
    let productDetails = req.body;
    let name=productDetails.name;
    let year=productDetails.year;
    let month=productDetails.month;
    let user=productDetails.user;

    try{
        let product = await productModel.findOne({name:name});
        
        if(product){
            product.brand=productDetails.brand;
            product.newQuantity = productDetails.newQuantity;
            product.price = product.price + productDetails.price;
            product.totalQuantity = product.totalQuantity + productDetails.newQuantity;

            product = await product.save();

            return res.json({
                Message: "Product Saved Successfully",
                Product : product
            });
        }
        else{
            createdProduct = await productModel.create(productDetails);
            
            if(createdProduct){
                return res.json({
                    Message:"Product Created Successfully",
                    Product: createdProduct
                });
            }
            else{
                return res.json({
                    Message:"Product Not Created"
                });
            }
        }
    }
    catch(err){
        return res.json({
            Message: "Product Controller",
            Error: err
        });
    }
};