export const initForm = () => {
  const form = document.querySelector('.subscription__form');
  const input = document.querySelector('.subscription__input');

  if (!form || !input) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    input.value = '';
    input.blur();
  });
};
