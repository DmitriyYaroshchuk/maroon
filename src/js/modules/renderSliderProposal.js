import errorMessage from "./showErrorMessage";
import {ERROR_SERVER} from "./variables";
import getProducts from "./getProducts";

function renderSliderProposal() {
    let productsData = [];
    getProducts('../data/proposal.json', renderSliderCart, productsData).then();

    function renderSliderCart(data) {
        data.forEach(item => {
            const { img, title, price, description, capacity } = item;

            const slide = document.createElement("div");
            slide.classList.add('swiper-slide');
            slide.innerHTML =
                `
            <article class="proposal-card">
                <img src="./../../img/proposal/${img}" alt="${title}">
                <div class="proposal-card__inner">
                    <div class="proposal-card__top">
                        <h4 class="proposal-card__title">${title}</h4>
                        <h4 class="proposal-card__price">${price}</h4>
                    </div>
                    <div class="proposal-card__bottom">
                        <p class="proposal-card__desc">${description}</p>
                        <p class="proposal-card__capacity">${capacity}</p>
                    </div>
                </div>
                <a href="../catalog.html" class="proposal-card__link"></a>
            </article>
            `;
            document.querySelector('.swiper-proposal .swiper-wrapper').append(slide);
        });
    }
}
export default renderSliderProposal;