import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import {ERROR_SERVER, PRODUCT_INFORMATION_NOT_FOUND} from "./variables";
import errorMessage from "./showErrorMessage";
import showErrorMessage from "./showErrorMessage";
import handleCardClick from "./handleCardClick";
import {getBasketFromLocalStorage} from "./localStorage";
import checkingActiveButtons from "./checkingActiveButtons";
import getProducts from "./getProducts";

function renderCardProduct() {
    let productsData = [];
    const catalogOfProducts = document.querySelector('.product');


    catalogOfProducts.addEventListener('click', event => {
        // Отслеживаем клик на карточке и добавляем в localStorage
        handleCardClick(event, '.product', '.product__btn')
    });

    getProducts('../data/card.json', loadProductDetails, productsData).then();

    function getParameterFromURL(parameter) {
        const urlParams = new URLSearchParams(window.location.search);
        // console.log('urlParams: ', urlParams);
        return urlParams.get(parameter);
    }

    function loadProductDetails(data) {
        if (!data || data.length === 0) {
            errorMessage(ERROR_SERVER, 'body');
            return;
        }



        const productId = Number(getParameterFromURL('id'));
        if (!productId) {
            errorMessage(PRODUCT_INFORMATION_NOT_FOUND, 'body');
            return;
        }

        const findProduct = data.find(card => card.id === productId);
        if (!findProduct) {
            showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND, 'body');
        }

        renderDetailedInfoProduct(findProduct, '.product');

        checkingRelevanceValueBasket(data);

        const basket = getBasketFromLocalStorage();
        checkingActiveButtons(basket, '.product', '.product__btn');
    }

    function renderDetailedInfoProduct(data, parentSelector) {
        const { id, img, title, subtitle, descTop, descBottom, ingredients, using, price } = data;

        const parent = document.querySelector(parentSelector);
        parent.setAttribute('data-product-id', id);


        parent.querySelector('.product__photo').src = img;
        parent.querySelector('.product__title').textContent = title;
        parent.querySelector('.product__text').textContent = subtitle;
        parent.querySelector('.product__desc span:first-child').textContent = descTop;
        parent.querySelector('.product__desc span:nth-child(2)').textContent = descBottom;
        parent.querySelector('.accordion__content').textContent = ingredients;
        parent.querySelector('.accordion__content:nth-child(2)').textContent = using;
        parent.querySelector('.product__price').textContent = price;
    }
}
export default renderCardProduct;