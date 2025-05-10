document.querySelectorAll('.faq__question').forEach(btn => {
	btn.addEventListener('click', () => {
		const item = btn.closest('.faq__item');
		item.classList.toggle('faq__item--active');
	})
})
