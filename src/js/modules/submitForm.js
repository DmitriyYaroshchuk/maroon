import modal from "./modal";
import modalThanks from "./modalThanks";

function submitForm(selectorForm) {
    const form = document.querySelector(selectorForm);
    const btn = form.querySelector('.btn-send');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const cartProduct = document.querySelectorAll('.cart__product');
        btn.innerHTML = `<span class="loader"></span>`;

        const cartData = [];
        cartProduct.forEach(product => {

            const productId = product.dataset.productId;
            const productName = product.querySelector('.cart__title').textContent;
            const productCount = product.querySelector('.cart__count').textContent;
            const productPrice = product.querySelector('.cart__price span').textContent;

            cartData.push({
                id: productId,
                name: productName,
                count: productCount,
                price: productPrice,
            });
        });

        const totalPrice = document.querySelector('.basket__total-price span').textContent;

        const formData = new FormData(form);

        formData.append('product', JSON.stringify(cartData))

        formData.append('totalPrice', totalPrice);

        for(let [name, value] of formData) {
            console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
        }

        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not ok');
                }
                return response.text();
            })
            .then(data => {
                btn.innerHTML = 'Оформить заказ';
                console.log(data);
                modalThanks('.modal-thanks', '.modal-thanks__button');
            })
            .catch(error => {
                btn.innerHTML = 'Оформить заказ';
                console.log('There was an error: ', error);
            })
            .finally(() => {
                form.reset();
            })
    });
}
export default submitForm;
const arr = [{"id":"1","name":"High","count":"1","price":"990 грн."},{"id":"2","name":"Rest","count":"1","price":"690 грн."}]