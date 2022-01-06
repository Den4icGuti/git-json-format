
const refs = {
  form: document.querySelector('.js-form'),
  textarea: document.querySelector('.js-form textarea')
};
const FEED_BACK_KEY = 'feedback-message'
const { form, textarea } = refs;

textarea.addEventListener('input', onTextareaInput);
form.addEventListener('submit', onSubmitForm)
populateTextarea();

/*
* - Получаем значение поля
* - Сохраняем его в хранилище
* - Можно добавить throttle
*/

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(FEED_BACK_KEY, message);
};

/*
* - Оставляем поведение по умолчанию
* - Убираем сообщение из хранилища
* - Очищаем форму
*/

function onSubmitForm(e) {
  e.preventDefault();

  console.log('form send');
  e.currentTarget.reset();
  localStorage.removeItem(FEED_BACK_KEY);
}

/*
* - Получаем значение из хранилища
* - Если там что-то было, обновляем DOM
*/

function populateTextarea() {
  const saveMessage = localStorage.getItem(FEED_BACK_KEY);

  if (saveMessage) {
    console.log(saveMessage);
    textarea.value = saveMessage;
  }
}