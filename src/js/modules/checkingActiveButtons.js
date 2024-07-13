
    // Добавляет кнопке класс active, если данный товар находится в localStorage
function checkingActiveButtons(basket, selectorCard, selectorBtn) {
    const buttons = document.querySelectorAll(selectorBtn);

    buttons.forEach(button => {
        const card = button.closest(selectorCard);
        const id = card.dataset.productId;
        const isInBasket = basket.includes(id);

        button.disabled = isInBasket;
        button.classList.toggle('active', isInBasket);
        button.textContent = isInBasket ? 'В корзине' : 'В корзину';
    });
}
export default checkingActiveButtons;