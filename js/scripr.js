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





/*выпадающие блоки*/
//desctop buttom
const buttom1 = document.querySelector('.buttomdesctop-1');
const buttom2 = document.querySelector('.buttomdesctop2');
const buttom3 = document.querySelector('.buttomdesctop3');

//mobile buttom
const bottomMobile1 = document.querySelector('.buttommobile1');
const bottomMobile2 = document.querySelector('.buttommobile2');
const bottomMobile3 = document.querySelector('.buttommobile3');

//sub card
const buttomSub1 = document.querySelector('.buttom-sub1');
const buttomSub2 = document.querySelector('.buttom-sub2');
const buttomSub3 = document.querySelector('.buttom-sub3');

//card
const cards1 = document.querySelector('.cards1');
const cards2 = document.querySelector('.cards2');
const cards3 = document.querySelector('.cards3');

//mobile cards in block card
const mobilecard1 = document.querySelector('.buttom-mobile1');
const mobilecard2 = document.querySelector('.buttom-mobile2');
const mobilecard3 = document.querySelector('.buttom-mobile3');




//buttom 1 desctop
if (buttom1) {

	buttom1.addEventListener('click', function () {
		buttom1.classList.toggle('_active-buttom');
		buttomSub1.classList.toggle('_activ-subCards');
		cards1.classList.toggle('_activ-width');

	})
}
//buttom 1 mpbile
if (bottomMobile1) {

	bottomMobile1.addEventListener('click', function () {
		bottomMobile1.classList.toggle('_active-buttom');
		mobilecard1.classList.toggle('_active-mobile');
		cards1.classList.toggle('_activ-width');

	})
}

//buttom 2 desctop

if (buttom2) {

	buttom2.addEventListener('click', function () {
		buttom2.classList.toggle('_active-buttom');
		buttomSub2.classList.toggle('_activ-subCards');
		cards2.classList.toggle('_activ-width');
	})
}

//buttom 2 mpbile
if (bottomMobile2) {

	bottomMobile2.addEventListener('click', function () {
		bottomMobile2.classList.toggle('_active-buttom');
		mobilecard2.classList.toggle('_active-mobile');
		cards2.classList.toggle('_activ-width');

	})
}

//buttom 3 desctop
if (buttom3) {

	buttom3.addEventListener('click', function () {
		buttom3.classList.toggle('_active-buttom');
		buttomSub3.classList.toggle('_activ-subCards');
		cards3.classList.toggle('_activ-width');
	})
}

//buttom 3 mpbile
if (bottomMobile3) {

	bottomMobile3.addEventListener('click', function () {
		bottomMobile3.classList.toggle('_active-buttom');
		mobilecard3.classList.toggle('_active-mobile');
		cards3.classList.toggle('_activ-width');

	})
}


// desctop buttom1// desctop buttom1
buttom1.onclick = (event) => {

	if (event.target.classList.contains('_active-buttom')) {
		buttom2.classList.remove('_active-buttom');
		buttomSub2.classList.remove('_activ-subCards');
		cards2.classList.remove('_activ-width');
		mobilecard2.classList.remove('_active-mobile');

		buttom3.classList.remove('_active-buttom');
		buttomSub3.classList.remove('_activ-subCards');
		cards3.classList.remove('_activ-width');
		mobilecard3.classList.remove('_active-mobile');

	}
}

///mobile buttom1
bottomMobile1.onclick = (event) => {

	if (event.target.classList.contains('_active-buttom')) {
		bottomMobile2.classList.remove('_active-buttom');
		buttomSub2.classList.remove('_activ-subCards');
		cards2.classList.remove('_activ-width');
		mobilecard2.classList.remove('_active-mobile');

		bottomMobile3.classList.remove('_active-buttom');
		buttomSub3.classList.remove('_activ-subCards');
		cards3.classList.remove('_activ-width');
		mobilecard3.classList.remove('_active-mobile');

	}
}


// desctop buttom2
buttom2.onclick = (event) => {

	if (event.target.classList.contains('_active-buttom')) {
		buttom1.classList.remove('_active-buttom');
		buttomSub1.classList.remove('_activ-subCards');
		cards1.classList.remove('_activ-width');
		mobilecard1.classList.remove('_active-mobile');

		buttom3.classList.remove('_active-buttom');
		buttomSub3.classList.remove('_activ-subCards');
		cards3.classList.remove('_activ-width');
		mobilecard3.classList.remove('_active-mobile');
	}
}

///mobile buttom2
bottomMobile2.onclick = (event) => {

	if (event.target.classList.contains('_active-buttom')) {
		bottomMobile1.classList.remove('_active-buttom');
		buttomSub1.classList.remove('_activ-subCards');
		cards1.classList.remove('_activ-width');
		mobilecard1.classList.remove('_active-mobile');

		bottomMobile3.classList.remove('_active-buttom');
		buttomSub3.classList.remove('_activ-subCards');
		cards3.classList.remove('_activ-width');
		mobilecard3.classList.remove('_active-mobile');
	}
}



// desctop buttom3
buttom3.onclick = (event) => {

	if (event.target.classList.contains('_active-buttom')) {
		buttom2.classList.remove('_active-buttom');
		buttomSub2.classList.remove('_activ-subCards');
		cards2.classList.remove('_activ-width');
		mobilecard2.classList.remove('_active-mobile');

		buttom1.classList.remove('_active-buttom');
		buttomSub1.classList.remove('_activ-subCards');
		cards1.classList.remove('_activ-width');
		mobilecard1.classList.remove('_active-mobile');
	}
}



///mobile buttom3

bottomMobile3.onclick = (event) => {

	if (event.target.classList.contains('_active-buttom')) {
		bottomMobile2.classList.remove('_active-buttom');
		buttomSub2.classList.remove('_activ-subCards');
		bottomMobile2.classList.remove('_activ-width');
		mobilecard2.classList.remove('_active-mobile');

		bottomMobile1.classList.remove('_active-buttom');
		buttomSub1.classList.remove('_activ-subCards');
		cards1.classList.remove('_activ-width');
		mobilecard1.classList.remove('_active-mobile');
	}
}




///scrolll

//card desctop 1
$(function () {

	jQuery.fn.autoscroll = function (selector) {
		$('html, body').animate({
			scrollTop: $(".main").height() + 150
		}, 500);
	}

	$('.buttomdesctop-1').on('click', function () {
		$('.buttom-sub1').autoscroll();
	});
})

//caed desctop 2
$(function () {

	jQuery.fn.autoscroll = function (selector) {
		$('html, body').animate({
			scrollTop: $(".main").height() + 150
		}, 500);
	}

	$('.buttomdesctop2').on('click', function () {
		$('.buttom-sub2').autoscroll();
	});
})


//caed carddesctop 3
$(function () {

	jQuery.fn.autoscroll = function (selector) {
		$('html, body').animate({
			scrollTop: $(".main").height() + 150
		}, 500);
	}

	$('.buttomdesctop3').on('click', function () {
		$('.buttom-sub3').autoscroll();
	});
})

/***********************************mobile buttom */

/* //caed carddesctop 1
$(function () {

	jQuery.fn.autoscroll = function (selector) {
		$('html, body').animate({
			scrollTop: $(".main").height() + 20
		}, 500);
	}

	$('.buttommobile1').on('click', function () {
		$('.buttom-sub1').autoscroll();
	});
})


//caed carddesctop 2
$(function () {

	jQuery.fn.autoscroll = function (selector) {
		$('html, body').animate({
			scrollTop: $(".main").height() - 2950
		}, 500);
	}

	$('.buttommobile2').on('click', function () {
		$('.buttom-sub2').autoscroll();
	});
})


//caed carddesctop 3
$(function () {

	jQuery.fn.autoscroll = function (selector) {
		$('html, body').animate({
			scrollTop: $(".main").height() - 650
		}, 500);
	}

	$('.buttommobile3').on('click', function () {
		$('.buttom-sub3').autoscroll();
	});
})
 */

$(document).ready(function () {
	$(".scroll").on("click", function (event) {
		let hash = $(this).attr("data-target"),
			target = $("#" + hash);

		event.preventDefault();
		$("html, body").animate({
			scrollTop: $(target).offset().top
		},
			800);

	});

});


/*form Ssity********************************************************
********************************************************************/


$(document).ready(function () {
	enableSelectBoxes();
});
function enableSelectBoxes() {
	$('div.selectBox').each(function () {
		$(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
		$(this).attr('value', $(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

		$(this).children('span.selected,span.selectArrow').click(function () {
			if ($(this).parent().children('div.selectOptions').css('display') == 'none') {
				$(this).parent().children('div.selectOptions').css('display', 'block');
			}
			else {
				$(this).parent().children('div.selectOptions').css('display', 'none');
			}
		});

		$(this).find('span.selectOption').click(function () {
			$(this).parent().css('display', 'none');
			$(this).closest('div.selectBox').attr('value', $(this).attr('value'));
			$(this).parent().siblings('span.selected').html($(this).html());
		});
	});
}