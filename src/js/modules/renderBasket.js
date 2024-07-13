import errorMessage from "./showErrorMessage";
import {ERROR_SERVER, NO_ITEMS_CART} from "./variables";
import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import {getBasketFromLocalStorage, setBasketToLocalStorage} from "./localStorage";

function renderBasket() {
    let productsData = [];
    const cart = document.querySelector('.cart');
    cart.addEventListener('click', (event) => {
        deleteProductBasket(event, '.cart__del-card')
    });

    async function getProducts() {
        try {
            if (productsData.length === 0) {
                let res = await fetch('../data/catalog.json');
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                productsData = await res.json();
            }
            loadProductBasket(productsData);

        } catch (error) {
            errorMessage(ERROR_SERVER, 'body');
            console.log(error);
        }
    }

    getProducts().then();

    function loadProductBasket(data) {
        cart.textContent = '';

        if (!data || data.length === 0) {
            errorMessage(ERROR_SERVER, 'body');
            return;
        }

        checkingRelevanceValueBasket(data);
        const basket = getBasketFromLocalStorage();

        if (!basket || basket.length === 0) {
            errorMessage(NO_ITEMS_CART, 'body');
            document.querySelector('.basket-form').classList.add('none');
            return;
        }

        const findProducts = data.filter(item => basket.includes(String(item.id)));
        if (!findProducts || findProducts.length === 0) {
            errorMessage(NO_ITEMS_CART, 'body');
            document.querySelector('.basket-form').classList.add('none');
            return;
        }

        renderProductsBasket(findProducts);
        countTotalPrice();
        setQuantityOfProducts();
    }

    function deleteProductBasket(event, selector) {
        const targetElem = event.target.closest(selector);
        if (!targetElem) return;

        const card = targetElem.closest('.cart__product');
        const id = card.dataset.productId;
        const basket = getBasketFromLocalStorage();
        const newBasket = basket.filter(item => item !== id);
        setBasketToLocalStorage(newBasket);
        if (newBasket.length === 0) {
            document.querySelector('.basket__total-price span').textContent = '0 грн.'
        }
        getProducts().then();
    }

    function countTotalPrice() {
        const products = document.querySelectorAll('.cart__product');
        let totalPrice = 0;

        products.forEach(product => {
            const priceCard = product.querySelector('.cart__price span');
            const countOfCard = product.querySelector('.cart__count');

            const price = parseFloat(priceCard.textContent.replace(' грн.', ''));
            const count = parseInt(countOfCard.textContent);

            totalPrice += price * count;
        });

        const out = document.querySelector('.basket__total-price span');
        out.textContent = totalPrice + ' грн.';
    }

    function setQuantityOfProducts() {
        const minusBtn = document.querySelectorAll('.cart__minus');
        const plusBtn = document.querySelectorAll('.cart__plus');

        minusBtn.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const card = btn.closest('.cart__product');
                const countProduct = card.querySelector('.cart__count');
                let count = parseInt(countProduct.textContent);

                if (count > 0) {
                    count--;
                    countProduct.textContent = count;
                    countTotalPrice();
                }
                if (count <= 0) {
                    deleteProductBasket(event, '.cart__minus');
                }
            })
        });

        plusBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.cart__product');
                const countProduct = card.querySelector('.cart__count');
                let count = parseInt(countProduct.textContent);

                count++;
                countProduct.textContent = count;
                countTotalPrice();
            })
        })
    }


    function renderProductsBasket(arr) {
        arr.forEach(card => {
            const {id, img, title, price} = card;
            const cardItem =
                `
                <div class="cart__product" data-product-id="${id}">
                    <div class="cart__img">
                        <img src="../img/catalog/${img}" alt="${title}">
                    </div>
                    <div class="cart__title">${title}</div>
                    <div class="cart__block-btns">
                        <div class="cart__minus">-</div>
                        <div class="cart__count">1</div>
                        <div class="cart__plus">+</div>
                    </div>
                    <div class="cart__price">
                        <span>${price}</span>
                    </div>
                    <div class="cart__del-card">X</div>
                </div>
            `;
            cart.insertAdjacentHTML('beforeend', cardItem);
        });
    }
}

export default renderBasket;