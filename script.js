document.querySelector('#calculatebtn').addEventListener('click', function() {
			var reach = document.querySelector('#reachinput').value;
			var diamond = document.querySelector('#diamondinput').value;
			var second = document.querySelector('#secondinput').value;
			var calculation = document.querySelector('#calculation');
			if(isNaN(reach) || isNaN(diamond) || isNaN(second)) {
				calculation.innerHTML = "Not a number!";
			} else if(empty(reach) || empty(diamond) || empty(second)) {
				calculation.innerHTML = "Fill all fields!";
			} else {
				if((reach - diamond) / second < 1) {
					calculation.innerHTML = "Already reached!";
				} else {
					if((reach - diamond) / second < 60) {
						calculation.innerHTML = (reach - diamond) / second + " seconds to go!";
					} else if((reach - diamond) / second / 60 < 60) {
						calculation.innerHTML = (reach - diamond) / second / 60 + " minutes to go!";
					} else {
						calculation.innerHTML = (reach - diamond) / second / 60 / 24 + " hours to go!";
					}
				}
			}
		});

		function empty(a) {
			if(a == null || a == "") {
				return true;
			} else {
				return false;
			}
		}