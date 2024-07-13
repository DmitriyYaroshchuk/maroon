import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import getProducts from "./getProducts";

function renderSliderProducts() {
    let productsData = [];

    getProducts('../data/bestsellers.json', function (data) {
        renderSliderCart(data);
        checkingRelevanceValueBasket(data);
    }, productsData).then();



    function renderSliderCart(data) {
        data.forEach(item => {
            const { img, title, description } = item;

            const slide = document.createElement("div");
            slide.classList.add('swiper-slide');
            slide.innerHTML = `
                <div class="card">
                    <img src="./../../img/bestsellers/${img}" alt="">
                    <div class="card__box">
                        <h4 class="card__title">${title}</h4>
                        <p class="card__desc">${description}</p>
                        <a href="../../catalog.html" class="card__link">Подробнее</a>
                    </div>
                </div>
            `;

            document.querySelector('.bestsellers .swiper-wrapper').append(slide);
        });
    }
}
export default renderSliderProducts;