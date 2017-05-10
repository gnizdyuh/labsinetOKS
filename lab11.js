window.onload = function() {

	document.querySelector('.btn').onclick = function() {
		validate();
		copy();
	}
}


function validate() {
	var datepicker = document.getElementById("datepicker");

	if(!datepicker.value) {
		datepicker.style.border = "2px solid red";
		return false;
	}
	else{
		datepicker.style.border = "2px solid green";
	}
}


function copy(){
	var datepicker = document.getElementById("datepicker").value;

	document.querySelector('.text').style.color = "#7745FF";

	if(!datepicker) {
		document.querySelector('.text').innerHTML = 'Дата не вибрана';
		
	}
	else{
		document.querySelector('.text').innerHTML = datepicker;
    }
}

