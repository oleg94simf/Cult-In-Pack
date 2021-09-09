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
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

			/* 		input.oninput = function () {
		
					};
		 */
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

		input.classList.add('_error');
	}

	function formRemoveError(input) {

		input.classList.remove('_error');

	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});


