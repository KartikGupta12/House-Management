const mongoose = require('mongoose');
const database_link="mongodb+srv://database_admin:ElDf7JgLLWdyHN8Q@cluster0.vsuxn2r.mongodb.net/?retryWrites=true&w=majority";
// const database_password=ElDf7JgLLWdyHN8Q;


// Connect to mongodb database
mongoose.connect(database_link)
.then(function(db){
    console.log('All Products Database Successfully Connected');
})
.catch(function(err){
    console.log('All Products Database Error',err);
})

const itemSchema = new mongoose.Schema({
    category :{
        type: String
    },
    items :{
        type: Array
    },
});

const itemModel = mongoose.model('itemModel',itemSchema);

// Units Used
// KG -> Kilogram , GM -> Gram , L -> Litre , ML -> MilliLitre , NO -> Number

// (async function addItem(){
//     const cat1 = {
//         category : "Grocery",
//         items : [{name : "Rice", unit: "KG"},
//                 {name : "Wheat Flour", unit: "KG"},
//                 {name : "Pulse", unit: "KG"},
//                 {name : "Almond", unit: "KG"},
//                 {name : "Cashew", unit: "KG"},
//                 {name : "Oil", unit: "L"},
//                 {name : "Ghee", unit: "KG"},
//                 {name : "Masala", unit: "GM"},
//                 {name : "Salt", unit: "KG"},
//                 {name : "Sugar", unit: "KG"},
//                 {name : "Tomato Sauce", unit: "KG"},
//                 {name : "Dairy", unit: "NO"},
//                 {name : "Instant Foods", unit: "NO"},
//                 {name : "Choclate", unit: "NO"},
//                 {name : "Ice Cream", unit: "GM"},
//                 {name : "Honey", unit: "KG"},
//                 {name : "Cereals", unit: "KG"},
//                 {name : "Tea", unit: "KG"},
//                 {name : "Coffee", unit: "GM"}]
//     };

//     const cat2 = {
//         category : "Bath, Body and Hair",
//         items : [{name : "Shampoo", unit: "ML"},
//                 {name : "Conditioner", unit: "ML"},
//                 {name : "Soaps", unit: "NO"},
//                 {name : "Face Wash", unit: "ML"},
//                 {name : "Perfume", unit: "NO"},
//                 {name : "Deodorant", unit: "NO"},
//                 {name : "Talcum Powder", unit: "GM"},
//                 {name : "Hair Oil", unit: "ML"},
//                 {name : "Body Lotion", unit: "ML"}]
//     };

//     const cat3 = {
//         category : "Cleaning",
//         items : [{name : "Detergent Powder", unit: "KG"},
//                 {name : "Surface Cleaners", unit: "ML"},
//                 {name : "Utensils Cleaners", unit: "NO"},
//                 {name : "Toilet Cleaners", unit: "ML"},
//                 {name : "Handwash", unit: "ML"}]
//     };

//     const cat4 = {
//         category : "Snacks",
//         items : [{name : "Chips", unit: "NO"},
//                 {name : "Kurkure", unit: "NO"},
//                 {name : "Bhujiya", unit: "KG"},
//                 {name : "Nachos", unit: "NO"},
//                 {name : "Makhana", unit: "GM"},
//                 {name : "Soya Sticks", unit: "NO"},
//                 {name : "Popcorn", unit: "NO"},
//                 {name : "Cold Drink", unit: "ML"},
//                 {name : "Juices", unit: "ML"},
//                 {name : "Energy Drink", unit: "ML"},
//                 {name : "Nutella", unit: "GM"}]
//     };

//     const cat5 = {
//         category : "Vegetables",
//         items : [{name : "Onion", unit: "KG"},
//                 {name : "Potato", unit: "KG"},
//                 {name : "Tomato", unit: "KG"},
//                 {name : "Coriander", unit: "GM"},
//                 {name : "Green Chilli", unit: "GM"},
//                 {name : "Broccoli", unit: "KG"},
//                 {name : "Carrot", unit: "KG"},
//                 {name : "Cauliflower", unit: "KG"},
//                 {name : "Cabbage", unit: "KG"},
//                 {name : "Lady Finger", unit: "KG"},
//                 {name : "Capsicum", unit: "GM"},
//                 {name : "Cabbage", unit: "KG"},
//                 {name : "Peas", unit: "KG"},
//                 {name : "Spinach", unit: "KG"},
//                 {name : "Cucumber", unit: "KG"},
//                 {name : "Ginger", unit: "GM"},
//                 {name : "Garlic", unit: "GM"},
//                 {name : "Lemon", unit: "NO"}]
//     };

//     const cat6 = {
//         category : "Fruits",
//         items : [{name : "Coconut", unit: "NO"},
//                 {name : "Grapes", unit: "KG"},
//                 {name : "Orange", unit: "KG"},
//                 {name : "Banana", unit: "KG"},
//                 {name : "Watermelon", unit: "KG"},
//                 {name : "Mango", unit: "KG"},
//                 {name : "Apple", unit: "KG"},
//                 {name : "Pomegranate", unit: "KG"},
//                 {name : "Guava", unit: "KG"},
//                 {name : "Chikoo", unit: "KG"},
//                 {name : "Lichi", unit: "KG"},
//                 {name : "Papaya", unit: "KG"},
//                 {name : "Pineapple", unit: "KG"}]
//     };

//     let addedItem = await itemModel.create(cat6);
//     console.log("Item created", addedItem);
// })();
module.exports = itemModel;