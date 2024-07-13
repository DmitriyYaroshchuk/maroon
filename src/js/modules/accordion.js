function accordion() {
    const accordionItems = document.querySelectorAll('.accordion__box');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        })
    })
}
export default accordion;