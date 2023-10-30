let startNum = parseInt(prompt("Введите начальное число:"));
let endNum = parseInt(prompt("Введите конечное число:"));
let sum = 0;
for (let i = startNum; i <= endNum; i++) {
    sum += i;
}
console.log("Сумма всех чисел в диапазоне равна: " + sum);




function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
console.log("Наибольший общий делитель: " + gcd(num1, num2));




let number = parseInt(prompt("Введите число:"));
let divisors = [];
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i);
    }
}
console.log("Делители числа: " + divisors.join(", "));




let fff = prompt("Введите число:");
let digitCount = fff.length;
console.log("Количество цифр в числе: " + digitCount);





let positive = 0,
    negative = 0,
    zero = 0,
    even = 0,
    odd = 0;
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Введите число:"));
    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    } else {
        zero++;
    }
    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log("Положительных: " + positive);
console.log("Отрицательных: " + negative);
console.log("Нулей: " + zero);
console.log("Четных: " + even);
console.log("Нечетных: " + odd);




let continueCalculation = true;
while (continueCalculation) {
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let operator = prompt("Введите оператор (+, -, *, /):");
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Неверный оператор";
    }
    console.log("Результат: " + result);
    let response = prompt("Хотите решить еще один пример? (да/нет)");
    continueCalculation = response === "да";
}




let ddd = prompt("Введите число:");
let shift = parseInt(prompt("На сколько цифр сдвинуть число?"));
let shiftedddd = ddd.substring(shift) + ddd.substring(0, shift);
console.log("Результат сдвига: " + shiftedddd);