import { render } from "./common";
import { productList } from "./data";

function showProduct (product) {
    if(!Array.isArray(product) || product.length == 0) {
        return [];
    }

    let result = '';
    for (let i = 0;i<product.length; i++) {
        let products = product[i];
        result+=`<div>
            <h3>
                <a href="./detail.html?id=${product[i].id}">
                    ${product[i].name}
                </a>
            </h3>
        </div>`;
    }

    return result;
}

render('app', showProduct(productList));