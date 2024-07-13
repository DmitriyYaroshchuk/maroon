import errorMessage from "./showErrorMessage";
import {ERROR_SERVER} from "./variables";

async function getProducts(url, callback, productsData, countShowCards = undefined) {
    try {
        if (productsData.length === 0) {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            productsData = await res.json();
        }
        callback(productsData, countShowCards);
    } catch (error) {
        errorMessage(ERROR_SERVER, 'body');
        console.log(error);
    }
}
export default getProducts;