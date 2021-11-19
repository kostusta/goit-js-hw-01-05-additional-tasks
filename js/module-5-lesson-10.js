console.log('** Module 5. Lesson 10. Прототипы и классы **')

// // *****************************************************************
// console.log('Example 1 - Блоггер');
// // Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// // email - почта, строка
// // age - возраст, число
// // numberOfPosts - кол-во постов, число
// // topics - массив тем на которых специализируется блоггер
// // Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// // Добавь метод getInfo(), который, возвращает строку: 
// // User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// // Добавь метод updatePostCount(value), который в параметре value 
// // принимает количество постов которые нужно добавить пользователю.

// class Blogger {
//   constructor ({ name = noNameUser, age = 0, numberOfPosts = 0, topics = [] } = {}) {
//     this.name = name;
//     this,age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value
//   }

// };

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts


// //*****************************************************************
// console.log('Example 2 - Хранилище');

// // Напиши класс Storage который создаёт объекты для управления складом товаров. 
// // При вызове будет получать один аргумент - начальный массив товаров, 
// // и записывать его в свойство items.

// // Добавь методы класса:

// // getItems() - возвращает массив товаров.
// // addItem(item) - получает новый товар и добавляет его к текущим.
// // removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(productsArray = []) {
//     this.productsArray = productsArray;
//   }

//   getItems() {
//     return this.productsArray;
//   }

//   addItem(item) {
//     // this.productsArray.push(item);
//     this.productsArray = [...this.productsArray, item]
//   }

//   removeItem(item) {
//     this.productsArray = this.productsArray.filter((product) => product !== item);
//   }

// };

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.productsArray); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.productsArray); // [ '🍎', '🍇', '🍑', '🍌' ]


// // *****************************************************************
// console.log('Example 3 - User');

// // Напиши класс User который создаёт объект со свойствами login и email. 
// // Объяви приватные свойства #login и #email, 
// // доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email } = {}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }


// };

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie


// // *****************************************************************
// console.log('Example 4 - Заметки');

// // Напиши класс Notes который управляет коллекцией заметок в свойстве items. 
// // Заметка это объект со свойствами text и priority. 
// // Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// // {
// //   LOW: 'low',
// //   NORMAL: 'normal',
// //   HIGH: 'high'
// // }
// // Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }

//   constructor(notes = []) {
//     this.notes = notes;
//   }

//   addNote(note) {
//     this.notes.push(note);
//   } 

//   removeNote(text) {
//     this.notes = this.notes.filter((note) => note.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     this.notes = this.notes.map((note) => note.text === text ? {...note, priority: newPriority} : note);
//   }
// };

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.notes);

// myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL });
// console.log(myNotes.notes);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.notes);

// myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.notes);


// // *****************************************************************
// console.log('Example 5 - Toggle');

// // Напишите класс Toggle который принимает объект настроек {isOpen: boolean} 
// // и объявляет одно свойство on - состояние вкл/выкл (true/false). 
// // По умолчанию значение свойства on должно быть false.

// class Toggle {
//   constructor({ isOpen = false } = {}){
//     this.on = isOpen
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });

// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();

// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');