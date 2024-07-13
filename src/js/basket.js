import modal from "./modules/modal";
import renderBasket from "./modules/renderBasket";
import getAnchorLinks from "./modules/getAnchorLinks";
import validateForms from "./modules/validateForms";

document.addEventListener('DOMContentLoaded', () => {
    renderBasket();
    modal();
    getAnchorLinks();
    validateForms('.basket-form');
});