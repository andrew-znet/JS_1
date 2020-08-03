(function tabl() {
    let desk = '';
    let char = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let black = 'class="black"';
    for (let i = 0; i <= 8; i++) {
        if (i == 0) {
            desk += '<thead><tr>';
        } else {
            if (i == 1) {
                desk += '<tbody>';
            }
            desk += '<tr>';
        }
        for (let j = 0; j <= 8; j++) {
            if (i == 0) {
                desk += '<th>' + char[j] + '</th>';
            } else {
                if (j == 0) {
                    desk += '<td>' + i + '</td>';
                } else {
                    if (j % 2 == 0 && i % 2 == 0 || j % 2 == 1 && i % 2 == 1) {
                        desk += '<td></td>';
                    } else {
                        desk += '<td ' + black + '></td>';
                    }
                }
            }
        }
        if (i == 0) {
            desk += '</th></thead>';
        } else {
            desk += '</tr>';
            if (i == 8) {
                desk += '</tbody>';
            }
        }

    }




    document.querySelector('table').innerHTML = desk;
}());

////----------------- Задача 2 -----------------
//   
let basketArr = [
    {
        id: 1,
        product: 'Товар 1',
        price: '1000'
    },
    {
        id: 2,
        product: 'Товар 2',
        price: 1000
    },
    {
        id: 3,
        product: 'Товар 3',
        price: 100
    },
    {
        id: 4,
        product: 'Товар 4',
        price: 1032
    },
    {
        id: 5,
        product: 'Товар 5',
        price: '513'
    },


    ];

const obj2 = ({}, basketArr);
//console.log(obj2);

const basket = document.querySelector('#basket');

let price = 0;
let item = 0;

function countBasketPrice() {
    while (item < basketArr.length) {
        if (basketArr[item].price) {
            price = price + (basketArr[item].price * 1);
        }
        item++;
    }
    return price > 0 ? 'В корзине: ' + basketArr.length + ' товаров на сумму ' + price + ' рублей' : 'Корзина пуста';


}
basket.innerHTML = countBasketPrice();

////----------------- Задача 3 -----------------


const catalog = document.getElementById('catalog');

function infoCatalog() {
    let info = '';
    let item = 0;
    while (item < basketArr.length) {
        info += '<div> id: ' + basketArr[item].id + ' product: ' + basketArr[item].product + ' price: ' + basketArr[item].price + '</div>';
        item++;

    }
    return info;
}
catalog.innerHTML = infoCatalog();
