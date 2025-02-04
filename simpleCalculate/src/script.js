// Основная функция для выполнения операций над числами
function performCalculation(number1, number2, operation) {
    // Вызываем переданную операцию и возвращаем результат
    return operation(number1, number2);
}

// Функция для сложения двух чисел
const addNumbers = function (num1, num2) {
    return num1 + num2;
};

// Функция для вычитания одного числа из другого
const subtractNumbers = function (num1, num2) {
    return num1 - num2;
};

// Функция для умножения двух чисел
const multiplyNumbers = function (num1, num2) {
    return num1 * num2;
};

// Функция для деления одного числа на другое
const divideNumbers = function (num1, num2) {
    if (num2 === 0) {
        throw new Error("Деление на ноль недопустимо!"); // Защита от деления на ноль
    }
    return num1 / num2;
};

// Объект, содержащий все доступные операции
const operations = {
    add: addNumbers,       // Сложение
    subtract: subtractNumbers, // Вычитание
    multiply: multiplyNumbers, // Умножение
    divide: divideNumbers,     // Деление
};

// Переменные для выбора операций
const selectedOperationAdd = "add";         // Выбранное действие: сложение
const selectedOperationSubtract = "subtract"; // Выбранное действие: вычитание
const selectedOperationMultiply = "multiply"; // Выбранное действие: умножение
const selectedOperationDivide = "divide";     // Выбранное действие: деление

// Примеры использования функции performCalculation с разными операциями
console.log(performCalculation(6, 3, operations[selectedOperationAdd]));        // Результат: 9
console.log(performCalculation(6, 3, operations[selectedOperationSubtract]));   // Результат: 3
console.log(performCalculation(6, 3, operations[selectedOperationMultiply]));   // Результат: 18
console.log(performCalculation(6, 3, operations[selectedOperationDivide]));     // Результат: 2