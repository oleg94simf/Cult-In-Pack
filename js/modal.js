///modal-window

const buttomActive = document.querySelector('.form__button');
const success = document.querySelector('.success');
const closeseccess = document.querySelector('.closeseccess');

const error = document.querySelector('.error');
const closeerror = document.querySelector('.closeerror');



/* if (buttomActive) {
	buttomActive.addEventListener('click', function () {
		success.classList.add('__active-modal');
	})
}

if (closeseccess) {
	closeseccess.addEventListener('click', function () {
		success.classList.remove('__active-modal');
	})
}
 */

if (buttomActive) {
	buttomActive.addEventListener('click', function () {
		error.classList.add('__active-modal');
	})
}

if (closeerror) {
	closeerror.addEventListener('click', function () {
		error.classList.remove('__active-modal');
	})
}

