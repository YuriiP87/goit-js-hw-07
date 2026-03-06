const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtn = controlsEl.querySelector('[data-create]');
const destroyBtn = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  inputEl.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }

  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}