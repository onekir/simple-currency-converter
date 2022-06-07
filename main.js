const input = require('sync-input');

const currencies = [  // from USD to ...
  {name: `USD`, rate: 1},
  {name: `JPY`, rate: 113.5},
  {name: `EUR`, rate: 0.89},
  {name: `RUB`, rate: 74.36},
  {name: `GBP`, rate: 0.75}
];

// print into console greeting and rates of currencies
function firstGreeting(){
  console.log(`Welcome to Currency Converter!`);
  currencies.forEach(currency => console.log(`1 USD equals  ${currency.rate} ${currency.name}`));
}

// check entered currency name and return index of currency
function checkCurrencyName(enteredName){
  for (currency in currencies) {
    if (currencies[currency].name == enteredName) return currency;
  }
  console.log(`Unknown currency`);
  return false;
}

// check entered amount of money
  function checkMoneyAmount(enteredAmount){
    if (enteredAmount < 1) {
      console.log(`The amount can not be less than 1`);
      return false;
    } else if (isNaN(enteredAmount)) {
        console.log(`The amount has to be a number`);
        return false;
      } else return true;
  }

function converter(){
  console.log(`What do you want to convert?`);
  
  const currencyFrom = input(`From: `).toUpperCase(); // input of initial currency name
  const indexFrom = checkCurrencyName(currencyFrom);
  while (!indexFrom) {
    console.log(`Unknown input`);
    currencyFrom = input(`From: `).toUpperCase();
    indexFrom = checkCurrencyName(currencyFrom);
  }
  
  const currencyTo = input(`To: `).toUpperCase(); // input of final currency name
  const indexTo = checkCurrencyName(currencyTo);
  while (!indexTo) {
    console.log(`Unknown input`);
    currencyTo = input(`From: `).toUpperCase();
    indexTo = checkCurrencyName(currencyFrom);
  }

  const enteredAmount = input(`Amount: `); // input of amount of money
  while (!checkMoneyAmount(enteredAmount)){
    enteredAmount = input(`Amount: `);
  }
  const computedAmount = (enteredAmount / currencies[indexFrom].rate * currencies[indexTo].rate).toFixed(4); // 4 decimal places
  console.log(`Result: ${enteredAmount} ${currencies[indexFrom].name} equals ${computedAmount} ${currencies[indexTo].name}`); 
}

// restart programm or exit
function continueOrExit() {    
  console.log(`What do you want to do?\n1-Convert currencies 2-Exit program`);
  let userAnswer = Number(input());
  
  while ((userAnswer !== 1) && (userAnswer !== 2)){
    console.log(`Unknown input\nWhat do you want to do?\n1-Convert currencies 2-Exit program`);
    userAnswer = Number(input());
  }

  if (userAnswer === 1) {
    converter(); 
  } else if (userAnswer === 2) {
    console.log(`Have a nice day!`);
  }
}
  
firstGreeting();
continueOrExit();
