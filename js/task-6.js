function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsContainer = document.querySelector('#controls');
const numberInput = controlsContainer.querySelector('input');
const createButton = controlsContainer.querySelector('[data-create]');
const destroyButton = controlsContainer.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', handleCreateButtonClick);
destroyButton.addEventListener('click', handleDestroyButtonClick);

function handleCreateButtonClick() {
  const amount = parseInt(numberInput.value.trim(), 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numberInput.value = '';  
  } else {
    alert('Please enter a number between 1 and 100');
  }
}

function handleDestroyButtonClick() {
  clearBoxes();
}

function createBoxes(amount) {
  clearBoxes(); 
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const boxElement = document.createElement('div');
    boxElement.style.width = `${size}px`;
    boxElement.style.height = `${size}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.margin = '5px';
    fragment.appendChild(boxElement);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
}