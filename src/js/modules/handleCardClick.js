import {getBasketFromLocalStorage, setBasketToLocalStorage} from "./localStorage";
import checkingActiveButtons from "./checkingActiveButtons";

    // Отслеживаем клик на карточке и добавляем в localStorage
function handleCardClick(event, selectorCart, selectorBtn) {
    const button = event.target.closest(selectorBtn);
    if (!button) return;

    const card = button.closest(selectorCart);
    const id = card.dataset.productId;
    const basket = getBasketFromLocalStorage();

    if (basket.includes(id)) return;
    basket.push(id);

    setBasketToLocalStorage(basket);
    checkingActiveButtons(basket, selectorCart, selectorBtn);
}
export default handleCardClick;