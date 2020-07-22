		function addition() {
		    let Tc = parseInt(document.getElementById('Tc').value, 10);
		    if (isNaN(Tc) === true) Tc = 0;
		    let Tf = (9 / 5) * Tc + 32;
		    document.getElementById('result').innerHTML = Tf;
		}


		function writename() {
		    let nam = (document.getElementById('name').value);
		    document.getElementById('admin').value = nam;

		}

		//------------------------ Задание 3 ------------------------
		function randomNum() {
		    return n = Math.round(Math.random() * 100 - 50);
		}
		let cC = 0;
		let aA = randomNum();
		let bB = randomNum();
		document.getElementById('aa').innerHTML += 'Число а= ' + aA;
		document.getElementById('bb').innerHTML += 'Число б= ' + bB;
		if (aA >= 0 && bB >= 0) {
		    Math.abs(cC = aA - bB);
		    document.getElementById('res').innerHTML += 'Разность чисел равна ' + cC;
		} else if (aA < 0 && bB < 0) {
		    cC = aA * bB;
		    document.getElementById('res').innerHTML += 'Произведение чисел равно ' + cC;
		} else {
		    cC = aA + bB;
		    document.getElementById('res').innerHTML += 'Сумма чисел равна ' + cC;
		}


		//------------------------ Задание 4 ------------------------

		function randomNumb() {
		    return m = Math.round(Math.random() * 15);
		}

		function genSwitch() {
		    switch (m) {
		        case 1:
		            document.getElementById('resSwitch').innerHTML += 1 + ', ';
		        case 2:
		            document.getElementById('resSwitch').innerHTML += 2 + ', ';
		        case 3:
		            document.getElementById('resSwitch').innerHTML += 3 + ', ';
		        case 4:
		            document.getElementById('resSwitch').innerHTML += 4 + ', ';
		        case 5:
		            document.getElementById('resSwitch').innerHTML += 5 + ', ';
		        case 6:
		            document.getElementById('resSwitch').innerHTML += 6 + ', ';
		        case 7:
		            document.getElementById('resSwitch').innerHTML += 7 + ', ';
		        case 8:
		            document.getElementById('resSwitch').innerHTML += 8 + ', ';
		        case 9:
		            document.getElementById('resSwitch').innerHTML += 9 + ', ';
		        case 10:
		            document.getElementById('resSwitch').innerHTML += 10 + ', ';
		        case 11:
		            document.getElementById('resSwitch').innerHTML += 11 + ', ';
		        case 12:
		            document.getElementById('resSwitch').innerHTML += 12 + ', ';
		        case 13:
		            document.getElementById('resSwitch').innerHTML += 13 + ', ';
		        case 14:
		            document.getElementById('resSwitch').innerHTML += 14 + ', ';
		        case 15:
		            document.getElementById('resSwitch').innerHTML += 15;
		            break;
		    }
		}
		randomNumb();
		genSwitch();

		function refSwitch() {
		    document.getElementById('resSwitch').innerHTML = '';
		    randomNumb();
		    genSwitch();
		}
		//------------------------ Задание 5 ------------------------

		function arifmResult1(nubA, nubB) {
		    nubA = parseInt(document.getElementById('arifmA').value, 10);
		    if (isNaN(nubA) === true) nubA = 0;
		    nubB = parseInt(document.getElementById('arifmB').value, 10);
		    if (isNaN(nubB) === true) nubB = 0;
		    document.getElementById('arifmSumm').innerHTML = '';
		    return document.getElementById('arifmSumm').innerHTML = nubA + nubB;
		}

		function arifmResult2(nubA, nubB) {
		    nubA = parseInt(document.getElementById('arifmA').value, 10);
		    if (isNaN(nubA) === true) nubA = 0;
		    nubB = parseInt(document.getElementById('arifmB').value, 10);
		    if (isNaN(nubB) === true) nubB = 0;
		    document.getElementById('arifmRazn').innerHTML = '';
		    return document.getElementById('arifmRazn').innerHTML = nubA - nubB;
		}

		function arifmResult3(nubA, nubB) {
		    nubA = parseInt(document.getElementById('arifmA').value, 10);
		    if (isNaN(nubA) === true) nubA = 0;
		    nubB = parseInt(document.getElementById('arifmB').value, 10);
		    if (isNaN(nubB) === true) nubB = 0;
		    document.getElementById('arifmDelen').innerHTML = '';
		    return document.getElementById('arifmDelen').innerHTML = nubA / nubB;
		}

		function arifmResult4(nubA, nubB) {
		    nubA = parseInt(document.getElementById('arifmA').value, 10);
		    if (isNaN(nubA) === true) nubA = 0;
		    nubB = parseInt(document.getElementById('arifmB').value, 10);
		    if (isNaN(nubB) === true) nubB = 0;
		    document.getElementById('arifmUmnoz').innerHTML = '';
		    return document.getElementById('arifmUmnoz').innerHTML = nubA * nubB;
		}


		//------------------------ Задание 6 ------------------------

		document.getElementById('a6').innerHTML += 'Число а= ' + aA;
		document.getElementById('b6').innerHTML += 'Число б= ' + bB;

		function createResult() {
		    var atrib = document.getElementById('zn').value;
		    switch (atrib) {
		        case '+':
		            document.getElementById('operRes').innerHTML = aA + bB;
		            break;
		        case '-':
		            document.getElementById('operRes').innerHTML = aA - bB;
		            break;
		        case '*':
		            document.getElementById('operRes').innerHTML = aA * bB;
		            break;
		        case '/':
		            document.getElementById('operRes').innerHTML = aA / bB;
		            break;
		        default:
		            document.getElementById('operRes').innerHTML = 'Операция не распознана';
		    }
		}
		//------------------------ Задание 8 ------------------------


		function znResult(val, pow) {
		    //		     val = parseInt(document.getElementById('zn_val').value, 10);
		    //		     pow = parseInt(document.getElementById('zn_pow').value, 10);
		    // не смог реализовать через ввод значений - зацикливается до бесконечности
		    if (pow < 1) {
		        document.getElementById('znRes').innerHTML = 'WTF?';
		        //                 При отрицательном значении степени, думаю:
		        return 1 / (val * znResult(val, pow + 1));
		    } else if (pow == 1) {
		        return val;
		    } else {
		        return val * znResult(val, pow - 1);
		    }

		}
		document.getElementById('znRes').innerHTML = '4 в 4й степени = ' + znResult(4, 4);
