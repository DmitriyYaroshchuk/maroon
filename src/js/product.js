import swiper from "./modules/swiper";
import modal from './modules/modal';
import accordion from "./modules/accordion";
import radio from "./modules/radio";
import renderCardProduct from "./modules/renderCardProduct";
import getAnchorLinks from "./modules/getAnchorLinks";
import renderSliderProposal from "./modules/renderSliderProposal";

document.addEventListener('DOMContentLoaded', () => {
    renderCardProduct();
    swiper();
    renderSliderProposal();
    modal();
    getAnchorLinks();
    accordion();
    radio();
})
