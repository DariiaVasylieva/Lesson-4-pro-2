// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
number = 20;
numbersFrom20To30 = '';

while (number <= 30) {
    numbersFrom20To30 += number + ' ';
    number += 0.5;
}
console.log(numbersFrom20To30);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
dollar = 10;
exchangeRate = 27;

while (dollar <= 100) {
    hryvnia = dollar * exchangeRate;
    console.log(`${dollar} доларів = ${hryvnia} гривень.`);
    dollar += 10;
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
someNumber = parseInt(prompt('Введите какое-то число (1-100):'));
i = 1;

while (i <= 100) {
    square = i * i;

    if (square <= someNumber) {
        console.log(i);
    }
    i++;
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
i = 1;
temp = 0;

while (i <= someNumber) {
    if (someNumber % i === 0) {
        temp++;
    }
    i++;
}

if (someNumber > 1 && temp <= 2) {
    console.log(`${someNumber} это простое число`);
} else{
    console.log(`${someNumber} это не простое число`);
}
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

i = 0;
result = false;

while (i < someNumber) {
    if (Math.pow(3, i) === someNumber) {
        result = true;
    }
    i++;
}

if (result) {
    console.log(`${someNumber} можна отримати шляхом зведення числа 3.`);
} else {
    console.log(`${someNumber} не можна отримати шляхом зведення числа 3.`);
}