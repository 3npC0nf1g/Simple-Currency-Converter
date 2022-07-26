const input = require("sync-input")

const BASE_CURRENCY_CODE = "USD"

const taxRate = []

taxRate["JPY"] = 113.5
taxRate["EUR"] = 0.89
taxRate["RUB"] = 74.36
taxRate["USD"] = 1
taxRate["GBP"] = 0.75
taxRate["XAF"] = 655

function showMenu(taxRate, baseCurrencyCode = BASE_CURRENCY_CODE) {
  console.log("Welcome to Currency Converter !")
  let taxRateMessage = ""
  let convertCurrencyMessage =
    "I can convert " + baseCurrencyCode + " to these currencies:"
  let currencyWishToConvertMessage =
    "Type the currency you wish to convert: " + baseCurrencyCode

  for (let currencyCode in taxRate) {
    taxRateMessage =
      taxRate[baseCurrencyCode] +
      " " +
      baseCurrencyCode +
      " equals " +
      taxRate[currencyCode] +
      " " +
      currencyCode
    console.log(taxRateMessage)
    convertCurrencyMessage = convertCurrencyMessage + " " + currencyCode + ","
  }
  convertCurrencyMessage = convertCurrencyMessage.substring(
    0,
    convertCurrencyMessage.length - 1
  )
  console.log(convertCurrencyMessage)
  console.log(currencyWishToConvertMessage)
}

function convertAmountToCurrencyCode(amount, currencyCode, taxRate) {
  return amount * taxRate[currencyCode]
}

/**
 *
 * @param {number} amount
 * @param {string} currencyCode
 * @returns {string}
 */
function formatAmount(amount, currencyCode) {
  return amount.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 4,
    minimumFractionDigits: 4,
  })
}

showMenu(taxRate)
let currencyTo = input("To: > ")
currencyTo = currencyTo.toUpperCase()
if (!taxRate.hasOwnProperty(currencyTo)) {
  console.log("Unknow currency")
  process.exit(1)
}
let amount = Number(input("Amount: > "))

if (isNaN(amount)) {
  console.log("The amount has to be a number")
  process.exit(1)
}

if (amount < 0) {
  console.log("The amount cannot be less than 1")
  process.exit(1)
}

let amountConverted = formatAmount(
  convertAmountToCurrencyCode(amount, currencyTo, taxRate),
  currencyTo
)

let resultMessage =
  "Result: " +
  amount +
  " " +
  BASE_CURRENCY_CODE +
  " equals " +
  amountConverted +
  " " +
  currencyTo

console.log(resultMessage)

/* 
const input = require('sync-input');

const rate = [];
rate["USD"] = 1; 
rate["JPY"] = 113.5;
rate["EUR"] = 0.89; 
rate["RUB"] = 74.36;
rate["GBP"] = 0.75;

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");

const to = input("To: ").toUpperCase();

if(!rate[to]) {
  console.log("Unknown currency");
}
else {
  const amount = input("Amount: ");
  if(isNaN(amount)) {
    console.log("The amount has to be a number");
  }
  else if(amount < 1) {
    console.log("The amount cannot be less than 1");
  }
  else {
    console.log(`Result: ${amount} USD equals ${(amount * rate[to]).toFixed(4)} ${to}`);
  }
}*/
