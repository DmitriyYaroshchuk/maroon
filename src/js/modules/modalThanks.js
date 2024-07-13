function modalThanks(selectorModal, selectorClose) {
    const modal = document.querySelector(selectorModal);
    const close = document.querySelector(selectorClose);

    modal.classList.toggle('active');

    close.addEventListener('click', event => {
        if (event.target) {
            event.preventDefault();
        }
        modal.classList.remove('active');
    });

    setTimeout(() => {
        modal.classList.remove('active');
    }, 5000);
}
export default modalThanks;