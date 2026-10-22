
const counterOutput = document.getElementById('counter-output');
const increaseBtn = document.getElementById('counter-increase');
const decreaseBtn = document.getElementById('counter-decrease');
const resetBtn = document.getElementById('counter-reset');

let counter = 0;


function updateCounter(newValue) {
  counter = Math.max(0, newValue); 
  counterOutput.textContent = counter;
}

increaseBtn.addEventListener('click', () => updateCounter(counter + 1));
decreaseBtn.addEventListener('click', () => updateCounter(counter - 1));
resetBtn.addEventListener('click', () => updateCounter(0));


const previewInput = document.getElementById('preview-input');
const previewText = document.getElementById('preview-text');
const charCount = document.getElementById('char-count');
const clearBtn = document.getElementById('preview-clear');
const PLACEHOLDER = 'Your text will appear here';

function updatePreview() {
  const value = previewInput.value;
  if (value === '') {
    previewText.textContent = PLACEHOLDER;
    previewText.classList.add('placeholder');
  } else {
    previewText.textContent = value;
    previewText.classList.remove('placeholder');
  }
  charCount.textContent = value.length;
}


previewInput.addEventListener('input', updatePreview);

clearBtn.addEventListener('click', () => {
  previewInput.value = '';
  updatePreview();
  previewInput.focus();
});

updatePreview(); 


const imageSelect = document.getElementById('image-select');
const landscapeImage = document.getElementById('landscape-image');
const landscapeCaption = document.getElementById('landscape-caption');

const landscapes = {
  mountains: { src: 'images/mountains.svg', alt: 'Snowy mountains under a blue sky', caption: 'Mountains' },
  ocean:     { src: 'images/ocean.svg',     alt: 'Blue ocean waves under a bright sun', caption: 'Ocean' },
  forest:    { src: 'images/forest.svg',    alt: 'Green pine forest on a sunny day',    caption: 'Forest' }
};

function showLandscape() {
  const data = landscapes[imageSelect.value];
  if (!data) return;
  landscapeImage.src = data.src;
  landscapeImage.alt = data.alt;
  landscapeCaption.textContent = data.caption;
}

imageSelect.addEventListener('change', showLandscape);
showLandscape(); 


const keyInput = document.getElementById('key-input');
const keyStatus = document.getElementById('key-status');
const keyResult = document.getElementById('key-result');


keyInput.addEventListener('keydown', (event) => {
  keyStatus.textContent = 'You pressed: ' + (event.key === ' ' ? 'Space' : event.key);

  if (event.key === 'Enter') {
    event.preventDefault(); 
    keyResult.textContent = keyInput.value;
  } else if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
  }
});


const card = document.getElementById('hover-card');
const instruction = document.getElementById('card-instruction');

const DEFAULT_TEXT = 'Move the mouse over the card or focus it with Tab.';
const ACTIVE_TEXT = 'The card is highlighted!';

function highlightCard() {
  card.classList.add('highlight');
  instruction.textContent = ACTIVE_TEXT;
}

function resetCard() {
  card.classList.remove('highlight');
  instruction.textContent = DEFAULT_TEXT;
}

card.addEventListener('mouseenter', highlightCard); 
card.addEventListener('mouseleave', resetCard);    
card.addEventListener('focus', highlightCard);     
card.addEventListener('blur', resetCard);          
