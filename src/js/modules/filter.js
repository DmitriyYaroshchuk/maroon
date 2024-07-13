
function filter() {
    const btnOpen = document.querySelector('#catalogBtnOpen');
    const btnClose = document.querySelector('#catalogBtnClose');
    const btnApply = document.querySelector('#catalogBtnApply');
    const resetBtn = document.querySelector('#catalogBtnReset');
    const catalogFilter = document.querySelector('#filter');

    function toggleFilter() {
        catalogFilter.classList.toggle('active')
    }
    btnOpen.addEventListener('click', toggleFilter);
    btnClose.addEventListener('click', toggleFilter);

    function applyFilter() {
        catalogFilter.classList.toggle('active');
    }
    btnApply.addEventListener('click', applyFilter);

    function resetFilter() {
        const radioButtons = document.querySelectorAll('.catalog-filter__column input[type="radio"]');
        radioButtons.forEach(item => {
            item.checked = false;
        });
    }
    resetBtn.addEventListener('click', resetFilter);
}

export default filter;