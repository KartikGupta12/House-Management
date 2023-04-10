const productModel = require('../Model/userProducts');
const inventoryModel = require('../Model/InventoryModel');
const itemModel = require('../Model/allProducts');

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

module.exports.createProduct = async function createProduct(req,res){
    let productDetails = req.body;

    const d = new Date();
    let name=productDetails.name;
    let date=d.getDate();
    let year=d.getFullYear();
    let month=months[d.getMonth()];
    // let month="March";

    try{
        let product = await productModel.findOne({user:productDetails.user, name:name, year:year, month:month});
        if(product){
            product.date = date;
            product.brand = productDetails.brand;
            product.newQuantity = productDetails.newQuantity;
            product.price += productDetails.price;
            product.totalQuantity += productDetails.newQuantity;

            let inventoryDetails = await inventoryModel.findOne({user:productDetails.user, name:name});

            if(inventoryDetails){
                if(productDetails.remainingQuantity >=0){
                    inventoryDetails.currentQuantity = productDetails.remainingQuantity + productDetails.newQuantity;
                }
                else{
                    inventoryDetails.currentQuantity += productDetails.newQuantity;
                }
                inventoryDetails = await inventoryDetails.save();
            }
            else{
                inventoryDetails ={};
                inventoryDetails.currentQuantity = productDetails.remainingQuantity + productDetails.newQuantity;
                inventoryDetails.user = productDetails.user;
                inventoryDetails.name = productDetails.name;
                inventoryDetails.category = productDetails.category;
                inventoryDetails = await inventoryModel.create(inventoryDetails);
            }

            product = await product.save();

            return res.json({
                Message: "Product Saved Successfully",
                Product : product,
                Inventory : inventoryDetails
            });
        }
        else{
            productDetails.date=date;
            productDetails.month=month;
            productDetails.year=year;
            productDetails.totalQuantity = productDetails.newQuantity;

            let inventoryDetails = await inventoryModel.findOne({user:productDetails.user, name:name});
            if(inventoryDetails){
                if(productDetails.remainingQuantity >=0){
                    inventoryDetails.currentQuantity = productDetails.remainingQuantity + productDetails.newQuantity;
                }
                else{
                    inventoryDetails.currentQuantity += productDetails.newQuantity;
                }
                inventoryDetails = await inventoryDetails.save();
            }
            else{
                inventoryDetails ={};
                inventoryDetails.currentQuantity = productDetails.remainingQuantity + productDetails.newQuantity;
                inventoryDetails.user = productDetails.user;
                inventoryDetails.name = productDetails.name;
                inventoryDetails.category = productDetails.category;
                inventoryDetails = await inventoryModel.create(inventoryDetails);
            }

            createdProduct = await productModel.create(productDetails);
            
            if(createdProduct){
                return res.json({
                    Message:"Product Created Successfully",
                    Product: createdProduct,
                    inventoryDetails : inventoryDetails
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

module.exports.getInventory = async function getInventory(req,res){
    let user = req.body.user;
    const d = new Date();
    let year=d.getFullYear();
    let month=months[d.getMonth()];
    // let month="March";

    try{
        let inventoryDetails = await inventoryModel.find({user:user});
        let allitems = await itemModel.find();
        let finalInventory =[];
        
        for(let x=0;x<inventoryDetails.length;x++){
            let product = await productModel.findOne({user:user, name:inventoryDetails[x].name , month:month, year:year});
            let productDetails = {};
            productDetails.price=0;
            if(product){
                productDetails.price = product.price;
            }
            
            for(y=0;y<allitems.length;y++){
                if(allitems[y].category==inventoryDetails[x].category){
                    for(z=0;z<allitems[y].items.length;z++){
                        if(allitems[y].items[z].name == inventoryDetails[x].name){
                            productDetails.unit = allitems[y].items[z].unit;
                            break;
                        }
                    }
                    break;
                }
            }
            productDetails.name = inventoryDetails[x].name;
            productDetails.category = inventoryDetails[x].category;
            productDetails.avg_usage = 1;
            productDetails.curr_quantity = inventoryDetails[x].currentQuantity;
            // productDetails.unit = items.inventoryDetails[x].category;
            finalInventory.push(productDetails);
        }

        return res.json({
            "Message" : "Inventory Detais",
            Inventory : finalInventory
        });
    }
    catch(err){
        return res.json({
            "Error" : err,
            "Location" : "Product Controller"
        });
    }
}

module.exports.updateProduct = async function getInventory(req,res){
    let name=req.body.name;
    let currQuantity=req.body.currentQuantity;
    let user = req.body.user;
    try{
        let inventoryDetails = await inventoryModel.findOne({user:user,name:name});

        if(inventoryDetails){
            inventoryDetails.currentQuantity = currQuantity;
            inventoryDetails=await inventoryDetails.save();

            return res.json({
                Message: "Inventory Updated Successfully",
                Data : inventoryDetails
            });
        }
        else{
            return res.json({
                "Error" : "Inventory Details Not Found"
            });
        }

    }
    catch(err){
        return res.json({
            Message: "Product Controller",
            Error: err
        });
    }
}