import {getBasketFromLocalStorage, setBasketToLocalStorage} from "./localStorage";

    // Проверяет есть ли продукт из localStorage в массиве которые приходит с сервера
function checkingRelevanceValueBasket(productsData) {
    const basket = getBasketFromLocalStorage();

    basket.forEach((basketId, index) => {
        const existsInProducts = productsData.some(item => item.id === Number(basketId));
        if (!existsInProducts) {
            basket.slice(index, 1);
        }
    });

    setBasketToLocalStorage(basket);
}
export default checkingRelevanceValueBasket;