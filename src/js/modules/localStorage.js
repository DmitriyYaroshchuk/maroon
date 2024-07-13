export function getBasketFromLocalStorage() {
    const cartDataJSON = localStorage.getItem('basket');
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

export function setBasketToLocalStorage(basket) {
    const basketCount = document.querySelectorAll('.nav__btn-count--basket');
    basketCount.forEach(item => {
        localStorage.setItem('basket', JSON.stringify(basket));
        item.textContent = basket.length;
    });
}