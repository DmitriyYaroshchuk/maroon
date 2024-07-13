function modal() {
	function bindModalNav(selectorOpen, selectorModal, selectorIcon) {
		const btnOpenClose = document.querySelector(selectorOpen);
		const modal = document.querySelector(selectorModal);
		const icon = document.querySelector(selectorIcon);

		btnOpenClose.addEventListener('click', event => {
			if(event.target) {
				event.preventDefault();
			}
			modal.classList.toggle('active');
			icon.classList.toggle('nav-icon--active');
			document.body.classList.toggle('no-scroll');
		});
	}
	bindModalNav('.mobile-nav-btn', '.mobile-nav', '.nav-icon');
}

export default modal;