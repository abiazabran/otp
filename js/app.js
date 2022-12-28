function genaratePin() {
  const pin = Math.round(Math.random() * 10000);
  if (pin < 1000) {
    return genaratePin();
  } else {
    return pin;
  }
}

document.getElementById('genarate-pin').addEventListener('click', function () {
  const pin = genaratePin();
  const inputField = document.getElementById('genarate-input-fild');
  inputField.value = pin;
});

document.getElementById('clac').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const typeOfnumberfield = document.getElementById('cale-input');
  const previousTypeNumber = typeOfnumberfield.value;

  if (isNaN(number)) {
    if (number === 'C') {
      typeOfnumberfield.value = '';
    } else if (number === '<') {
      const disits = previousTypeNumber.split('');
      disits.pop();
      const remaininhDisits = disits.join('');
      typeOfnumberfield.value = remaininhDisits;
    }
  } else {
    const newTypeNumber = previousTypeNumber + number;
    typeOfnumberfield.value = newTypeNumber;
  }
});

document.getElementById('verify-btn').addEventListener('click', function () {
  const inputField = document.getElementById('genarate-input-fild');
  const currentPin = inputField.value;
  const typeOfnumberfield = document.getElementById('cale-input');
  const CurrentType = typeOfnumberfield.value;
  const pinSuccessMsage = document.getElementById('pin-success');
  const pinWorngMssage = document.getElementById('pin-worng');
  if (CurrentType === currentPin) {
    pinSuccessMsage.style.display = 'block';
    pinWorngMssage.style.display = 'none';
  } else {
    pinWorngMssage.style.display = 'block';
    pinSuccessMsage.style.display = 'none';
  }
});
