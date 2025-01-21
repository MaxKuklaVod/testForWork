const myArray = {
    mySlice(array, start, end = array.length - 1) {
        let result = [];
        let i;
        const length = array.length - 1;

        // Приводим start к положительному индексу, если он отрицательный
        if (start < 0) {
            start = Math.max(length + start, 0); // Убедимся, что индекс не выходит за границы
        }

        // Приводим end к положительному индексу, если он отрицательный
        if (end < 0) {
            end = Math.max(length + end, 0); // Убедимся, что индекс не выходит за границы
        }

        for (i = start; i <= end; i++) {
            result.push(array[i]);
        }

        return result;
    },

    myIndexOf(array, item, from = 0) {
        let result = -1;
        let i;
        const length = array.length - 1;

        // Приводим from к положительному индексу, если он отрицательный
        if (from < 0) {
            from = Math.max(length + from, 0); // Убедимся, что индекс не выходит за границы
        }

        for (i = from; i < length - 1; i++) {
            if (array[i] == item) {
                result = i;
                break;
            }
        }
        return result;
    },

    myIncludes(array, item, from = 0) {
        let result = false;
        let i;
        const length = array.length - 1;

        // Приводим from к положительному индексу, если он отрицательный
        if (from < 0) {
            from = Math.max(length + from, 0); // Убедимся, что индекс не выходит за границы
        }

        for (i = from; i < length - 1; i++) {
            if (array[i] == item) {
                result = true;
                break;
            }
        }

        return result;
    },

    /* Так как метода myIndexOf и myIncludes присутствуют в одном объекте, то можно записать проще
    myIncludes(array, item, from = 0){
        let result = true;

        if (myIndexOf(array, item, from) === -1){
            result = false;
        }

        return result;
    }
    */
}

console.log(myArray.mySlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 1, -2));
console.log(myArray.myIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));
console.log(myArray.myIncludes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));


