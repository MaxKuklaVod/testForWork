// Функция для того, чтобы сделать первую букву строки заглавной.
function capitalizeFirstLetter(str) {
    if (!str) return str; // Проверяем, не пустая ли строка
    return str.at(0).toUpperCase() + str.slice(1);
}


// Функция для укорочения строки с добавлением троеточия.
function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str; // Если длина строки меньше или равна ограничению

    // Обрезаем строку по пробелу или знаку препинания
    let truncated = str.slice(0, maxLength);
    let lastSpaceIndex = Math.max(truncated.lastIndexOf(' '), truncated.lastIndexOf(','), truncated.lastIndexOf('.'), truncated.lastIndexOf('!'), truncated.lastIndexOf('?'), truncated.lastIndexOf(':'));

    // Если знак препинания или пробел найден, обрезаем до него
    if (lastSpaceIndex !== -1) {
        truncated = truncated.slice(0, lastSpaceIndex);
    }

    return truncated + '...'; // Добавляем троеточие
}


// Функция для проверки, является ли одна строка подстрокой другой.
function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

console.log(capitalizeFirstLetter("привет"));

console.log(truncateString("Это очень длинная строка, которая не помещается в отведенное место!", 40));

console.log(isSubstring("привет", "вет"));
console.log(isSubstring("мир", "солнце"));