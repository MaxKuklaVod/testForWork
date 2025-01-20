// Функция взята из документации по Math.random()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

function secretNum(){
    let minNum = 0;
    let maxNum = 100;
    let flag = false;
    let num;
    let count = 0;
    const randomNum = getRandomIntInclusive(minNum, maxNum);

    console.log(`Компьютер 1 загадал число: ${randomNum}`);

    while (flag === false){
        num = minNum + Math.floor((maxNum - minNum) / 2);
        count += 1;
        console.log(`\nПопытка №${count}`);
        console.log(`Компьютер 2: Пусть будет ${num}`);

        if (num > randomNum){
            maxNum = num;
            console.log('Компьютер 1: Меньше');
        }
        else if (num < randomNum){
            minNum = num;
            console.log('Компьютер 1: Больше');
        }
        else{
            console.log('Компьютер 1: Правильно!');
            flag = true;
        }
    }
}

secretNum();