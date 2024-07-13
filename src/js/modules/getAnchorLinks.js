function getAnchorLinks() {
    function bindAnchorLink(selector) {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', () => {
                const modal = document.querySelector(selector);
                if (modal) {
                    modal.classList.remove('active');
                    document.querySelector('body').classList.remove('no-scroll');
                    document.querySelector('.nav-icon').classList.remove('nav-icon--active');
                }
            });
        });
    }
    bindAnchorLink('.mobile-nav');
}
export default getAnchorLinks;