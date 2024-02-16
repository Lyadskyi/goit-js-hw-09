const form = document.querySelector('form');
// const inputEl = document.querySelector('input')
// const textareaEl = document.querySelector('textarea');


// console.log(formEl);
// console.log(inputEl);
// console.log(textareaEl);
// console.log(btnEl);

const STORAGE_KEY = "feedback-form-state";

function readFormData(form) {
  const emailUser = form.email.value;
  const messageUser = form.message.value;
  return {
    emailUser,
    messageUser
  };
};

// console.log(readFormData(form));

form.addEventListener('input', (event) => {
  event.preventDefault();
  const data = readFormData(event.currentTarget);
  console.log(data);

  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
});

const rawData = localStorage.getItem(STORAGE_KEY);
console.log(rawData);
if (rawData) {
  const data = JSON.parse(rawData);
  form.email.value = data.emailUser;
  form.message.value = data.messageUser;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.clear();
  form.reset();
})

// Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька підзавдань:

// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок: "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними
// значеннями.



// На що буде звертати увагу ментор при перевірці:



// На живій сторінці відображається форма з двома елементами форми і кнопкою типу submit.

// Форма стилізована згідно з макетом.

// На формі прослуховуються події input і submit.

// При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем "feedback-form-state",
// збережені дані не містять пробіли по краях.

// Введення даних в одне поле форми не видаляє дані в сховищі для іншого.

// При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined.

// При сабміті форми є перевірка, щоб обидва елементи форми були заповнені.

// Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями email, message та їхніми
// поточними значеннями, а також очищаються сховище і поля форми.

// Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з'являються дані від попереднього
// сабміта.

