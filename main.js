		function addition() {
		    let Tc = parseInt(document.getElementById('Tc').value);
		    if (isNaN(Tc) === true) Tc = 0;
		    let Tf = (9 / 5) * Tc + 32;
		    document.getElementById('result').innerHTML = Tf;
		}


		function writename() {
		    let nam = (document.getElementById('name').value);
		    document.getElementById('admin').value = nam;

		}
