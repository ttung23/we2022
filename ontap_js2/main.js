// khai báo biến
const productList = [
    {id: 1, name: "product a", price: 200},
    {id: 2, name: "product b", price: 300}
];

// selector đến element product
const productsElement = document.querySelector("#product");

function showProducts (products) {
    if (!Array.isArray(products) || products.length == 0) return [];

    let result="";
    for (let i =0; i< products.length; i++) {
        result += `<h2>${products[i].name}</h2>`;
    }

    return result;
}

console.log(showProducts(productList));