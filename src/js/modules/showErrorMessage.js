function errorMessage(message, selector) {
    const modal = document.createElement('div');
    modal.classList.add('error');

    modal.innerHTML =
        `
            <h3>${message}</h3>
            <p><a href="../catalog.html">Перейти к списку товаров!</a></p>
        `

    const close = document.createElement('button');
    close.classList.add('error__btn-close');
    close.innerHTML =
        `
            <img src="../../img/icons/close-error.svg" alt="close">
        `;
    modal.append(close);

    function showErrorMessage() {
       const out = document.querySelector(selector);
       out.insertAdjacentElement('afterend', modal);
       document.querySelector("body").classList.add('no-scroll');
    }

    showErrorMessage();

    function closeErrorMessage() {
        close.addEventListener('click', () => {
            modal.remove();
            document.querySelector("body").classList.remove('no-scroll');
        })
    }

    closeErrorMessage();
}

export default errorMessage;


