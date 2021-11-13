console.log('** Module 2. Lesson 3. Массивы **')


// *****************************************************************
// // Example 1 - Базовые операции с массивом

// // Создайте массив genres с элементами «Jazz» и «Blues».
// // Добавьте «Рок-н-ролл» в конец.
// // Выведите в консоль первый элемент массива.
// // Выведите в консоль последний элемент массива. 
// // Код должен работать для массива произвольной длины.
// // Удалите первый элемент и выведите его в консоль.
// // Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['«Jazz»' , '«Blues»'];
// console.log(genres);

// genres.push('«Рок-н-ролл»');
// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift(0));
// console.log(genres);

// console.log(genres.unshift('«Country»', '«Reggy»'));
// console.log(genres);

// // *****************************************************************
// // Example 2 - Массивы и строки

// // Напиши скрипт для вычисления площади прямоугольника со сторонами, 
// // значения которых хранятся в переменной values в виде строки. 
// // Значения гарантированно разделены пробелом.

// const values = '8 11';

// const valuesToArray = values.split(' ');
// console.log(valuesToArray);

// const square = parseFloat(valuesToArray[0]) * parseFloat(valuesToArray[1]);
// console.log(square)


// // *****************************************************************
// // Example 3 - Перебор массива

// // Напиши скрипт для перебора массива fruits циклом for. 
// // Для каждого элемента массива выведи в консоль строку 
// // в формате номер_элемента: значение_элемента. 
// // Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`Элемент №${i + 1} : значение ${fruits[i]}`)
// }

// // *****************************************************************
// // Example 4 - Массивы и циклы

// // Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. 
// // В переменных names и phones хранятся строки имен и телефонных номеров, 
// // разделенные запятыми. Порядковый номер имен и телефонов в строках 
// // указывают на соответствие. Количество имен и телефонов гарантированно 
// // одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// console.log(namesArray)
// console.log(phonesArray)

// for (let i = 0; i < namesArray.length; i += 1) {
//   console.log(`Name: ${namesArray[i]} --> phone: ${phonesArray[i]}`)
// }

// // *****************************************************************
// // Example 5 - Массивы и строки

// // Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. 
// // Результирующая строка не должна начинаться или заканчиваться пробельным символом. 
// // Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

// const stringToArray = string.split(' ')
// console.log(stringToArray)

// stringToArray.splice(0, 1)
// stringToArray.splice(stringToArray.length - 1, 1)

// const resultString = stringToArray.join(' ')
// console.log(resultString)


// // *****************************************************************
// // Example 6 - Массивы и строки

// // Напиши скрипт который «разворачивает» строку (обратный порядок букв) 
// // и выводит ее в консоль.

// const string = 'Welcome to the future';

// const stringToArray = string.split('');
// console.log(stringToArray);
// const resultArray = [];

// for (let i = stringToArray.length; i >= 0; i -= 1) {
//   resultArray.push(stringToArray[i]);
// }

// const resultStringFirstVariant = resultArray.join('');
// console.log(resultStringFirstVariant);

// const resultStringSecondtVariant = string.split('').reverse().join('');
// console.log(resultStringSecondtVariant);


// // // *****************************************************************
// // Example 7 - Сортировка массива с циклом

// // Напиши скрипт сортировки массива строк в алфавитном 
// // порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i; j < langs.length; j += 1) {
//     // console.log(langs[j])
//     if (langs[i][0] > langs[j][0]) {
//       const temporaryVariable = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temporaryVariable;
//       console.log(langs)
//     }
//   }
// }

// console.log('Result array: ', langs) //['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']


// // *****************************************************************
// // Example 8 - Поиск элемента

// // Напиши скрипт поиска самого маленького числа в массиве. 
// // Код должен работать для любого массива чисел. 
// // Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];

// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   min = min < numbers[i] ? min : numbers[i]
// }

// console.log(min); // 1

