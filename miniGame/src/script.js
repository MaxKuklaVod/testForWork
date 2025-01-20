// Функция для генерации случайного целого числа в заданном диапазоне (включительно)
// Взято из документации по Math.random()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

// Функция для игры в угадывание числа
function secretNum() {
    let minNum = 0; // Минимальное значение
    let maxNum = 100; // Максимальное значение
    let attempts = 0; // Счетчик попыток
    const randomNum = getRandomIntInclusive(minNum, maxNum); // Загаданное число

    console.log(`Компьютер 1 загадал число: ${randomNum}`);

    while (true) { 
        // Используем бинарный поиск для угадывания числа
        const guess = Math.floor((minNum + maxNum) / 2); 

        attempts += 1; // Увеличиваем счетчик попыток
        console.log(`\nПопытка №${attempts}`);
        console.log(`Компьютер 2: Пусть будет ${guess}`);

        if (guess > randomNum) {
            maxNum = guess - 1; // Обновляем максимальное значение
            console.log('Компьютер 1: Меньше');
        } else if (guess < randomNum) {
            minNum = guess + 1; // Обновляем минимальное значение
            console.log('Компьютер 1: Больше');
        } else {
            console.log('Компьютер 1: Правильно!');
            break; // Выход из цикла, если число угадано
        }
    }
}

// Запускаем игру
secretNum();
