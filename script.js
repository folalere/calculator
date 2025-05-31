const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}


  // keyboard input support
document.addEventListener('keydown', function (e) {
const key = e.key;

if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
  appendValue(key);
} else if (key === 'Enter') {
  calculate();
} else if (key === 'Backspace') {
  display.value = display.value.slice(0, -1);
} else if (key === 'Escape') {
  clearDisplay();
}
});

// Light/Dark Theme Toggle 3
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// History feature
  const historyList = document.getElementById('historyList');

    function calculate() {
      try {
        const result = eval(display.value);
        historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
        display.value = result;
      } catch {
        display.value = 'Error';
      }
    }
