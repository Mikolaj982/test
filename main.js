const convert = () => {
  const input = document.querySelector('#input');
  const select = document.querySelector('#select');
  const converted = document.querySelector('#converted');
  converted.innerHTML = `TO ${(input.value * select.options[select.selectedIndex].value).toFixed(2)}`;
};

(() => { 
  fetch(`https://api.nbp.pl/api/exchangerates/tables/a/today`)
  .then((response) => response.json())
  .then((data) => {
    data[0].rates
      .filter(rate => (rate.code === 'USD' ? USD.value = rate.mid : '' || rate.code === 'EUR' ? EUR.value = rate.mid : '' || rate.code === 'CHF' ? CHF.value = rate.mid : ''))})})();