import swiper from "./modules/swiper";
import modal from './modules/modal';
import renderSliderProducts from "./modules/renderSliderProducts";
import getAnchorLinks from "./modules/getAnchorLinks";

document.addEventListener('DOMContentLoaded', () => {
    modal();
    getAnchorLinks();
    renderSliderProducts();
    swiper();
});




