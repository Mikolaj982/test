const valueOfCurriencie = document.querySelector('#input');
const getCurrencies = document.querySelector('#getCurrencies');
const selectCurriencies = document.querySelector('#currencies');

const createAndInsertOption = key => {
  const option = `<option value=${key}>${key}</option>`;
  selectCurriencies.insertAdjacentHTML('beforeend', option);
}

const getCurrencyList = () => {
  fetch(`http://api.nbp.pl/api/exchangerates/tables/a/`)
    .then((response) => response.json())
    .then((data) => { 
      console.log(Object.values(data[0].rates).forEach((key) => { createAndInsertOption(key)} ))})
      }
// })



getCurrencies.addEventListener('click', getCurrencyList);