const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

// Створюємо функцію, яка дозволяє зчитувати інформацію і повертати її в об'єкт

function readFormData(form) {
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  return {
    email,
    message,
  };
};

form.addEventListener('input', (event) => {
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
});

function retrievingLocalStorageData() {
  const rowData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(rowData);
  return data;
};

if (retrievingLocalStorageData() !== null) {
  form.email.value = retrievingLocalStorageData().email;
  form.message.value = retrievingLocalStorageData().message;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (email === '' || message === '') {
    return false;
  };

  if (retrievingLocalStorageData() !== null) {
    console.log(retrievingLocalStorageData());
  }
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

