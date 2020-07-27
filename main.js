//----------------- Задача 1 -----------------

function alertSimpleNumb() {
    let simNumb = 1;
    let arrSimpNumb = [];
    const p1 = document.getElementById('parOne');
    while (simNumb <= 100) {
        if (simNumb == 1) {
            arrSimpNumb.push(1)
        } else {
            let result = 2;
            let i = 2;
            while (simNumb % i !== 0) {
                i += 1;
                result += 1;
            }
            if (result == simNumb) {
                arrSimpNumb.push(' ' + result);
            }
        }
        simNumb += 1;
    }
    p1.insertAdjacentHTML('beforeend', (document.innerHTML = arrSimpNumb));
}
alertSimpleNumb();




//----------------- Задача 4 -----------------
function getFor() {
    const di1 = document.getElementById('resultFor');
    for (let i = 0; i < 10; di1.insertAdjacentHTML('beforeend', (document.innerHTML = ' ' + i++ + ';'))) {}
}
getFor();
//----------------- Задача 4* -----------------
function array() {
    let arr1 = [];
    let end = 0;
    const di2 = document.getElementById('resultFor4');
    while (end <= 20) {
        end++;
        arr1.push('x');
        di2.insertAdjacentHTML('beforeend', (document.innerHTML = arr1.join('') + '<br>'));
    }
//   arr1.join('') - убирает запятые - => строка.
}
array();
