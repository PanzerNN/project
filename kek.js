'use strict';// нужен для того чтобы всегда задавать переменные правильно через var или let

console.log(leftBorderWidth);
var leftBorderWidth=1;

let obj = {
    Name: "John",
    age: 25,
    ismarried:false,
};

console.log(obj.Name); // или console.log(obj["Name"])

let arr=["plum.png","orange.png","apple.bmp"]         // arr- массив

console.log(arr[2]);

//let answer = confirm("Хочешь сас?");
//console.log(answer);

//let answer = +prompt("Хочешь сас?"); //для того чтобы вместо строки было число надо знак +
//console.log(answer);

//console.log(typeof (arr));//с помощью type of узнаем тип переменной


let incr = 10,
    decr = 10;  //можно обьявить переменные вот так, чтобы не писать кучу раз let


console.log(++incr); //на 1 больше
console.log(--decr); //на 1 меньше
console.log(5%2); //остаток от деления 1
console.log("2" == 2); // === сравнение по типам данных, == сравнение по значению(поэтому 2==2 тру)


let isChecked = true;
    isClose = true;

console.log(isChecked && isClose);       //&& - логический оператор И, возвращает тру только когда все тру. ||-оператор или.
console.log(isChecked || isClose); //возвращает тру, если хотя бы один тру.
console.log(isChecked || !isClose); // !меняет тру на фолс и наоборот.




