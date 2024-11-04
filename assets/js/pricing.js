monthlyPayment.addEventListener('click',handlePaymentOptions);

const priceNumbers = document.querySelectorAll('.price-number');


function handlePaymentOptions() {

  if(monthlyPayment.checked) {
    for (const number of priceNumbers) {
      number.innerText = Number((number.innerText - 0.09) / 10).toFixed(2);
    }

  }
  else {

    for (const number of priceNumbers) {
      number.innerText = Number((number.innerText * 10) + 0.09).toFixed(2);
    }
  }

 
}