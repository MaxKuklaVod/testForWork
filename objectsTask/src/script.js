// Функция для вычисления суммы всех числовых полей в объект
function calcNumericFieldsAnObject(object){
    let key;
    let sumNumericFields = 0;

    for (key in object){
        // Преобразуем значение по ключу в число и проверяем, является ли оно числом
        if (!isNaN(Number(object[key]))){
            sumNumericFields += Number(object[key]);
        }
    }

    return sumNumericFields;
}

// Функция для получения имен числовых полей в объекте, отсортированных по убыванию значений.
function getSortedNumericFieldNames(object){
    let key;
    let numericFields = [];

    for (key in object){
        // Преобразуем значение по ключу в число и проверяем, является ли оно числом
        if (!isNaN(Number(object[key]))){
            numericFields.push(key);
        }
    }
    // Сортируем массив имен полей по убыванию значений
    numericFields.sort((a, b) => Number(object[b]) - Number(object[a]));

    return numericFields;
}

let object = {
    name: "Vasya",
    friends: 5,
    likes: 19,
    projects: 7,
}

console.log(calcNumericFieldsAnObject(object));
console.log(getSortedNumericFieldNames(object));