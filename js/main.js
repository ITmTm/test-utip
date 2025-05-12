// 1) FAQ
document.querySelectorAll('.faq__question').forEach(btn => {
	btn.addEventListener('click', () => {
		btn.closest('.faq__item').classList.toggle('faq__item--active');
	});
});


// 2) Слайдер
const slider     = document.querySelector('.trade__list');
const slides     = document.querySelectorAll('.trade__item');
const pagination = document.querySelector('.trade__pagination');

if (slider && pagination) {
	// обновление активной точки
	function updateDots() {
		const idx = Math.round(slider.scrollLeft / slider.clientWidth);
		Array.from(pagination.children).forEach((dot, i) => {
			dot.classList.toggle('active', i === idx);
		});
	}

	// (пере)инициализация
	function initSlider() {
		const isMobile = window.innerWidth <= 576;
		pagination.innerHTML = '';
		slider.removeEventListener('scroll', updateDots);
		slider.style.scrollBehavior = '';

		if (!isMobile) return;             // на десктопе — отключаем

		slider.style.scrollBehavior = 'smooth';
		slides.forEach((_, i) => {
			const dot = document.createElement('button');
			dot.setAttribute('aria-label', `Перейти к слайду ${ i + 1 }`);
			dot.addEventListener('click', () => {
				slider.scrollTo({ left: i * slider.clientWidth });
			});
			pagination.append(dot);
		});

		pagination.children[0]?.classList.add('active');
		slider.addEventListener('scroll', updateDots);
		updateDots();
	}

	initSlider();
	window.addEventListener('resize', initSlider);
}
