//----------------- Задача 1 -----------------

function alertSimpleNumb() {

    let simNumb = 2; //Начальное число
    let numb = 2; //Число делителя
    let chech = true; //Проверка простого числа
    let arrSimpNumb = []; //Массив простых чисел
    const p1 = document.getElementById('parOne'); //Вывод в id

    while (simNumb <= 100) {
        numb = 2;
        chech = true;
        while (numb < simNumb) {
            //Выход из цикла если не простое число
            if (simNumb % numb == 0) {
                //console.log(simNumb) 
                chech = false;
                break;
            }
            numb++;
        }
        if (chech) {
            arrSimpNumb.push(simNumb); //Добавить в массив простые числа
            p1.innerHTML = p1.innerHTML + ' ' + simNumb; //В html по циклу добавить
        }

        simNumb++;
    }
    console.log(arrSimpNumb)
}
alertSimpleNumb();
//---------------------------------------------------





//----------------- Задача 3 -----------------

let basketArr = [
        ['#1', 'Товар 1', '1000'],
        ['#2', 'Товар 2', 100],
        ['#3', 'Товар 3', '500'],
        ['#4', 'Товар 3'],
        ['#5', 'Товар 4', 133]
    ];
const basket = document.querySelector('#basket');

let price = 0;
let item = 0;
let numPrice = 2;

function countBasketPrice() {
    while (item < basketArr.length) {
        if (basketArr[item][numPrice]) {
            price = price + (basketArr[item][numPrice] * 1);
        }
        item++;
    }
    return 'Цена в корзине: ' + price + "р.";
}
basket.innerHTML = countBasketPrice();


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
