// const token = localStorage.getItem('authToken');
const fetchData = async (token) => {
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
    return items;
}

async function GetProductsDetails(token) {
    let data = await fetchData(token);
    return makeitems([...new Set(data['Inventory'].map((element) => element.category))], data['Inventory']);
}

export default GetProductsDetails;