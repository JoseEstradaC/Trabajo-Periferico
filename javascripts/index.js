/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
var rotado = false;
function myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
	var burger = document.getElementById('burger');
	if (rotado) {
		burger.style.transform = 'rotate(0deg)';
		rotado = false;
	} else {
		burger.style.transform = 'rotate(90deg)';
		rotado = true;
	}
}
