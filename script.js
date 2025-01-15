"Задание номер 1 программирование (20 минут)";
function numberForCase(a) {
    const zeroEnding = [1];
    const exceptions = [11, 12, 13, 14];
    const aEnding = [2, 3, 4];
    const lastTwoDigits = a % 100;
    const lastDigit = a % 10;

    if (zeroEnding.includes(lastDigit) && !exceptions.includes(lastTwoDigits)) {
        console.log(`${a} компьютер`);
    } else if (aEnding.includes(lastDigit) && !exceptions.includes(lastTwoDigits)) {
        console.log(`${a} компьютера`);
    } else {
        console.log(`${a} компьютеров`);
    }
}

"Задание номер 2 программирование (40 минут)";
function commonDivisors(array) {
    let length = array.length;
    let arrayDivisors = divisors(array[0]);

    for (let i = 1; i <= length - 1; i++) {
        const intersection = arrayDivisors.filter(value => divisors(array[i]).includes(value));

        arrayDivisors = intersection;
    }

    return (arrayDivisors);
}

function divisors(a) {
    let i, divisors = [];
    for (i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            divisors.push(i);
            if (i !== a / i) {
                divisors.push(a / i);
            }
        }
    }
    divisors.push(a);
    return divisors.sort((a, b) => a - b);
}

"Задание номер 3 программирование, используется функция из задания номер 2 (5 минут)";
function primeNumbers(a, b) {
    let i, arrayPrime = [];
    for (i = a; i <= b; i++) {
        if (divisors(i).length == 1) {
            arrayPrime.push(i);
        }
    }
    return arrayPrime;
}


"Задание номер 4 программирование (10 минут)";
const Object = {
    multiplicationTable(a){
        row = `\t`
        for (let i = 1; i <= a; i++){
            row += `${i}\t`;
        }
        console.log(row);
        for (let i = 1; i <= a; i++){
            let row = `${i}\t`;
            for (let j = 1; j <= a; j++){
                row += `${i*j}\t`;
            }
            console.log(row);
        }
    }
}

Object.multiplicationTable(5);