import swiper from "./modules/swiper";
import modal from './modules/modal';
import filter from "./modules/filter";
import {renderCatalogProducts} from "./modules/renderCatalogProducts";
import getAnchorLinks from "./modules/getAnchorLinks";


document.addEventListener('DOMContentLoaded', () => {
    swiper();
    modal();
    renderCatalogProducts();
    getAnchorLinks();
    filter();
})