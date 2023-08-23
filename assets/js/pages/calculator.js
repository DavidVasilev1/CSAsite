let clearCalc = false;

function appendToType(value) {
  const input = document.getElementById('input');

  if (clearCalc) {
    input.value = value;
    clearCalc = false;
  } else {
    input.value += value;
  }

  console.log(value);
}

function calculate() {
  try {
    const input = document.getElementById('input');
    const result = eval(input.value);
    input.value = result;
    console.log(result);

    const storage = document.getElementById('storage');
    storage.innerHTML += '<p>' + result + '</p>';

    clearCalc = true;

    saveCalculation(result);
  } catch (error) {
    input.value = 'Error';
  }
}

function saveCalculation(result) {
  const saved = getSaved();
  saved.push(result);
  setCookie('results', JSON.stringify(saved));
}

function getSaved() {
  const saved = getCookie('results');
  return saved ? JSON.parse(saved) : [];
}

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value) + ';path=/';
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const parts = cookie.split('=');
    if (parts[0].trim() === name) {
      return decodeURIComponent(parts[1].trim());
    }
  }
  return '';
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = getSaved();
  const storage = document.getElementById('storage');
  for (const result of saved) {
    storage.innerHTML += '<p>' + result + '</p>';
  }
});

function clearSaves() {
  document.getElementById('storage').innerHTML = '';
  setCookie('results', '');
}

function clearText() {
  const input = document.getElementById('input');
  input.value = '';
}