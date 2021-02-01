const input = document.querySelector('#value');
const result = document.querySelector('#result');
const select = document.querySelector('#selector');
const button = document.querySelectorAll('button');
const clear = document.querySelector('#clear');
const dispResult = document.querySelector('#dispResult');

input.focus();

function toDecimal(value, name) {
  let conv = Number(value).toString(10);
  display(conv, name);
}

function toBinary(value, name) {
  let conv = Number(value).toString(2);
  display(conv, name);
}

function toOctal(value, name) {
  let conv = Number(value).toString(8);
  display(conv, name);
}

function toHex(value, name) {
  let conv = Number(value).toString(16);
  display(conv, `${name}adecimal`);
}

function display(finalResult, name) {
  result.value = finalResult;
  dispResult.textContent = `Result: ${name}`;
}

select.addEventListener('change', function() {
  let option = this.value;
  let num = input.value;
  
  if(option === 'hex') {
    num = `0x${num}`;
  } else if(option === 'octal') {
    num = `0o${num}`;
  } else if(option === 'binary') {
    num = `0b${num}`;
  } else {
    num =  num;
  }

  button.forEach(btn => {
    btn.addEventListener('click', (e) => {
      
      let current = e.target.id;
    
      if(current === 'decimal') {
        toDecimal(num, current);
      } else if(current === 'binary') {
        toBinary(num, current);
      } else if(current === 'octal') {
        toOctal(num, current);
      } else if(current === 'hex') {
        toHex(num, current);
      } 
    })
  })
});

clear.addEventListener('click', () => {
  input.value = '';
  result.value = '';
  select.selectedIndex = '0';
  input.focus();
})