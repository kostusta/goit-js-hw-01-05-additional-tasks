// // *****************************************************************
// // Example 1 - Основы обьектов

// // Напиши скрипт, который, для объекта user, последовательно:

// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'skydiving'
// // заменяет значение premium на false
// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() 
// // и for...of
// // Код

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };


// user.mood = 'happy'; // добавляет поле mood со значением 'happy'
// user.hobby = 'skydiving'; // заменяет значение hobby на 'skydiving'
// user.premium = 'false'; // заменяет значение premium на false
// console.table(user)


// const objKeys = Object.keys(user);
// for(const key of objKeys) {
//   console.log(`${key}:${user[key]}`)
// }

// // *****************************************************************
// // Example 2 - метод Object.values()

// // У нас есть объект, в котором хранятся зарплаты нашей команды. 
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
// // Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// // Код

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// const salariesValues = Object.values(salaries);

// for(const value of salariesValues) {
//   sum += value
// };

// console.log(salariesValues);
// console.log(sum);

// // *****************************************************************
// // Example 3 - Массив объектов

// // Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов 
// // и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней 
// // с таким именем, ценой и количеством из обьекта

// // Код

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function alcTotalPrice(stones, stoneName) {
//   for(const stone of stones) {
//     if (stoneName === stone.name) {
//       return stone.price * stone.quantity
//     }
//   }

//   return 'Такаого камня нет'
// };

// console.log(alcTotalPrice(stones, 'Изумруд')); //5200
// console.log(alcTotalPrice(stones, 'Бриллиант')); //8100
// console.log(alcTotalPrice(stones, 'Сапфир')); //2800
// console.log(alcTotalPrice(stones, 'Щебень')); //400
// console.log(alcTotalPrice(stones, 'Отсев')); //Такаого камня нет

// // *****************************************************************
// // Example 4 - Комплексные задачи

// // Напиши скрипт управления личным кабинетом интернет банка. 
// // Есть объект account в котором необходимо реализовать методы для работы с 
// // балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//         return{
//           id: this.transactions.length + 1,
//           type,
//           amount,
//         };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     if(amount > 0) {
//       this.balance += amount;
//       this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//       return `Операция успешна. Ваш баланс пополнен на ${amount}`
//     }
//     return `Вы не можете пополнить счте на ${amount}. Введено отрицательное значение`
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       return ('Cнятие такой суммы не возможно, недостаточно средств')
//     }

//     if (amount > 0) {
//       this.balance -= amount;
//       this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//       return `Операция успешна.`
//     }

//     return `Вы не можете снять ${amount}. Введено отрицательное значение`
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return `Ваш баланс равен ${this.balance}`
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
//       if (transaction.id === id){
//         return transaction
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;

//     for(const transaction of this.transactions) {
//       if(type === transaction.type) {
//         sum += transaction.amount
//       }
//     }
//     return sum;
//   },
// };

// console.log(account.getBalance()); //Ваш баланс равен 0

// console.log(account.deposit(200)); //Операция успешна. Ваш баланс пополнен на 200
// console.log(account.deposit(300)); //Операция успешна. Ваш баланс пополнен на 300
// console.log(account.deposit(500)); //Операция успешна. Ваш баланс пополнен на 500
// console.log(account.deposit(-500)); //Вы не можете пополнить счте на -500. Введено отрицательное значение

// console.log(account.getBalance()); //Ваш баланс равен 1000

// console.log(account.withdraw(200)); //Операция успешна.

// console.log(account.getBalance()); //Ваш баланс равен 800

// console.log(account.withdraw(-200)); //Вы не можете снять -200. Введено отрицательное значение

// console.log(account.getBalance()); //Ваш баланс равен 800

// console.log(account.withdraw(20000)); //Cнятие такой суммы не возможно, недостаточно средств
// console.log(account.deposit(800)); //Операция успешна. Ваш баланс пополнен на 800
// console.log(account.deposit(500)); ////Операция успешна. Ваш баланс пополнен на 500

// console.log(account.getTransactionDetails(2)); //{id: 2, type: 'deposit', amount: 300}
// console.log(account.getTransactionTotal('deposit')); //2300
// console.log(account.getTransactionTotal('withdraw')); //200
// console.table(account.transactions);
