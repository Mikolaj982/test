const convert = () => {
  const value = document.querySelector('#value');
  const select = document.querySelector('#select');
  const converted = document.querySelector('#converted');
  converted.innerHTML === '' ? converted.innerHTML = `TO ${(value.value * select.options[select.selectedIndex].value).toFixed(2)}` : converted.innerHTML = `TO ${(value.value * select.options[select.selectedIndex].value).toFixed(2)}`;
};

(() => { 
  fetch(`http://api.nbp.pl/api/exchangerates/tables/a/`)
  .then((response) => response.json())
  .then((data) => {
    console.log( data[0].rates
      .filter(rate => (rate.code == 'USD' ? USD.value = rate.mid : '' || rate.code == 'EUR' ? EUR.value = rate.mid : '' || rate.code == 'CHF' ? CHF.value = rate.mid : '')))})})();