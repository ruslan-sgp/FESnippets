function calculateAverage(x1, x2, x3) {
    let average = (x1 + x2 + x3) / 3;
    return average;
}

let avg =  calculateAverage(10, 20, 30);

console.log('Среднее значение:', avg);
alert('Среднее значение: ' + avg);

function concatStrings(s1, s2) {
    let result = `Первое слово - «‎${s1}» , второе слово - «‎${s2}»`;

    return result;
}

let s = concatStrings('Привет', 'Пока');

console.log('Результат конкатенации:', s)