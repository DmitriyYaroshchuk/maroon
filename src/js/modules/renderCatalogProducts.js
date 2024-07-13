import {COUNT_SHOW_CARDS_CLICK, ERROR_SERVER, NO_PRODUCTS_IN_THIS_CATEGORY} from "./variables";
import {getBasketFromLocalStorage} from "./localStorage";
import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import handleCardClick from "./handleCardClick";
import checkingActiveButtons from "./checkingActiveButtons";
import errorMessage from "./showErrorMessage";
import getProducts from "./getProducts";

export function renderCatalogProducts() {
    let productsData = [];
    const catalogOfProducts = document.querySelector('.catalog__slider');


    catalogOfProducts.addEventListener('click', event => {
        // Отслеживаем клик на карточке и добавляем в localStorage
        handleCardClick(event, '.catalog-card', '.catalog-card__btn')
    });

        // Делаем запрос на сервер
    getProducts('../data/catalog.json', divideProducts, productsData, COUNT_SHOW_CARDS_CLICK).then();

        // Разделяет массив на группы
    function divideProducts(arr, size) {
        if (!arr || arr.length === 0) {
            errorMessage(NO_PRODUCTS_IN_THIS_CATEGORY, 'body');
            return;
        }
        console.log(arr);

        const dividedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            dividedArr.push(arr.slice(i, i + size));
        }

        renderProductCards(dividedArr);

        // Проверяет есть ли продукт из localStorage в массиве которые приходит с сервера
        checkingRelevanceValueBasket(arr);

        const basket = getBasketFromLocalStorage();
        checkingActiveButtons(basket, '.catalog-card', '.catalog-card__btn')
    }

        //  Отвечает за создание и заполнение карточек товаров на основе разделенных групп.
    function renderProductCards(groups) {
        groups.forEach(group => {

            const sliderWrapper = document.createElement("div");
            sliderWrapper.classList.add('swiper-slide');

            const catalogSliderWrapper = document.createElement("div");
            catalogSliderWrapper.classList.add('catalog-slide-slider__wrapper');

            group.forEach(product => {
                const { id, img, title, price, description, capacity } = product;

                const card = document.createElement('article');
                card.classList.add('catalog-card');
                card.setAttribute('data-product-id', id);

                card.innerHTML = `
                    <img src="../img/catalog/${img}" alt="">
                    <div class="catalog-card__inner">
                        <div class="catalog-card__top">
                            <h4 class="catalog-card__title">${title}</h4>
                            <h4 class="catalog-card__price">${price}</h4>
                        </div>
                        <div class="catalog-card__bottom">
                            <p class="catalog-card__desc">${description}</p>
                            <p class="catalog-card__capacity">${capacity}</p>
                        </div>
                    </div>
                    <button class="catalog-card__btn custom-btn">В корзину</button>
                    <a href="../product.html?id=${id}" class="catalog-card__link"></a>  
                `;
                catalogSliderWrapper.append(card);
            });
            sliderWrapper.append(catalogSliderWrapper);
            document.querySelector('.swiper-catalog .swiper-wrapper').append(sliderWrapper);
        });
    }
}
