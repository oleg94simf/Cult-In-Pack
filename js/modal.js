"use strict"


$(function ($) {
	$(".phone").mask("+38 (099) - 999 - 99 - 99");
});


//numberInput

const changeHedler = e => {
	const value = e.value
	e.value = value.replace(/\D/g, '');
}

///modal-window


function modalWindowError() {
	const buttomActive = document.querySelector('.form__button');
	const error = document.querySelector('.error');
	const closeerror = document.querySelector('.closeerror');

	error.classList.add('__active-modal');


	if (closeerror) {
		closeerror.addEventListener('click', function () {
			error.classList.remove('__active-modal');
		})
	}

}



function modalWindowSuccess() {
	const buttomActive = document.querySelector('.form__button');
	const success = document.querySelector('.success');
	const closeseccess = document.querySelector('.closeseccess');

	success.classList.add('__active-modal');



	if (closeseccess) {
		closeseccess.addEventListener('click', function () {
			success.classList.remove('__active-modal');
		})
	}

}






//исчезновение меню при скроле вниз

var header = $('.header__container'),
	scrollPrev = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();

	if (scrolled > 100 && scrolled > scrollPrev) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


//form ***************************************

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');

	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		if (error === 0) {
			modalWindowError()

			form.reset();


		} else {


		}


	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}


			input.onfocus = function () {
				if (this.classList.contains('_error')) {
					// удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
					this.classList.remove('_error');
				}
			};

		}

		return error;

	}

	function formAddError(input) {
		input.parentElement.classList.add('_error')
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error')
		input.classList.remove('_error');

	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});



/*************************************
 * *******************checkbox********
 *************************************/


/* 
$('.checkbox__active').change(function () {
	$('.checkbox__buttom').prop("disabled", !this.checked);


	const buttonCheckbox = document.querySelector('.checkbox__buttom');
	const label = document.querySelector('label');

	function checkbox() {
		const conteinerActivation = document.querySelector('.content');
		const checkbox = document.querySelector('.checkbox');
		if (buttonCheckbox) {
			conteinerActivation.classList.remove('__none');
			checkbox.classList.add('__none');
		}
	}
	buttonCheckbox.addEventListener('click', checkbox);


}).change()

 */



function checkbox() {
	const buttonCheckbox = document.querySelector('.checkbox__buttom');
	const label = document.querySelector('label');

	const conteinerActivation = document.querySelector('.content');
	const checkbox = document.querySelector('.checkbox');
	if (buttonCheckbox) {
		conteinerActivation.classList.remove('__none');
		checkbox.classList.add('__none');
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('checkbox');

	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		if (error === 0) {
			checkbox();

			form.reset();


		} else {


		}


	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			}

			const checbox = document.querySelector('#rules');
			checbox.onfocus = function () {
				if (this.classList.contains('_error')) {
					// удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
					this.classList.remove('_error');
				}
			};

		}

		return error;

	}

	function formAddError(input) {
		input.parentElement.classList.add('_error')
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error')
		input.classList.remove('_error');

	}


});