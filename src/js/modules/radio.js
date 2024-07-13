function radio() {
    const radioButtons = document.querySelectorAll('.product__radio');
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', () => {
            if (radioButton.checked) {
                radioButtons.forEach(otherRadioButton => {
                    if (otherRadioButton !== radioButton) {
                        otherRadioButton.checked = false;
                    }
                });
            }
        });
    });
}
export default  radio;