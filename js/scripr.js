//Menu-burger

const iconMenu = document.querySelector('.menu-ikon');
const menuHeader = document.querySelector('.header__menu');
if (iconMenu) {

	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active-menu');
		menuHeader.classList.toggle('_active-menu');
	})
}


//прокрутка при клике

const menuLinks = document.querySelectorAll('.header__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.size').offsetHeight;

			if (iconMenu.classList.contains('_active-menu')) {
				document.body.classList.remove('_lock')
				iconMenu.classList.remove('_active-menu');
				menuHeader.classList.remove('_active-menu');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}

	}
}

//language

let list = document.querySelector(".header__list");
let lang = list.querySelectorAll(".lang");

for (let i = 0; i < lang.length; i++) {
	lang[i].addEventListener("click", function () {
		let current = document.querySelectorAll("._active-laungage");
		current[0].className = current[0].className.replace("_active-laungage", "");
		this.className += " _active-laungage";
	});
}



let but = document.querySelector('.panel-but');

let plan = document.querySelector('.panel');

if (but) {
	but.addEventListener('click', function () {
		but.classList.toggle('active-bot');
		plan.classList.toggle('active');
	})
}

/*выпадающие блоки*/

const buttom1 = document.querySelector('.buttom-1');
const buttom2 = document.querySelector('.buttom-2');
const buttom3 = document.querySelector('.buttom-3');

const buttomSub1 = document.querySelector('.buttom-sub1');
const buttomSub2 = document.querySelector('.buttom-sub2');
const buttomSub3 = document.querySelector('.buttom-sub3');

const cards1 = document.querySelector('.cards1');
const cards2 = document.querySelector('.cards2');
const cards3 = document.querySelector('.cards3');

const mobilecard1 = document.querySelector('.buttom-mobile1');
const mobilecard2 = document.querySelector('.buttom-mobile2');
const mobilecard3 = document.querySelector('.buttom-mobile3');

if (buttom1) {

} buttom1.addEventListener('click', function () {
	buttom1.classList.toggle('_active-buttom')
	buttomSub1.classList.toggle('_activ-subCards')
	cards1.classList.toggle('_activ-width');
})

if (buttom2) {

} buttom2.addEventListener('click', function () {
	buttom2.classList.toggle('_active-buttom')
	buttomSub2.classList.toggle('_activ-subCards')
	cards2.classList.toggle('_activ-width');
})

if (buttom3) {

} buttom3.addEventListener('click', function () {
	buttom3.classList.toggle('_active-buttom')
	buttomSub3.classList.toggle('_activ-subCards')
	cards3.classList.toggle('_activ-width');
})

//mobile sub-cards
if (buttom1) {

} buttom1.addEventListener('click', function () {
	mobilecard1.classList.toggle('_active-mobile');
})

if (buttom2) {

} buttom2.addEventListener('click', function () {
	mobilecard2.classList.toggle('_active-mobile');
})

if (buttom3) {

} buttom3.addEventListener('click', function () {
	mobilecard3.classList.toggle('_active-mobile');
})

