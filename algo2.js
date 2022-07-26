const input = require("sync-input")

const rate = []
rate["USD"] = 1
rate["JPY"] = 113.5
rate["EUR"] = 0.89
rate["RUB"] = 74.36
rate["GBP"] = 0.75

console.log("Welcome to Currency Converter!")
console.log("1 USD equals 1 USD")
console.log("1 USD equals 113.5 JPY")
console.log("1 USD equals 0.89 EUR")
console.log("1 USD equals 74.36 RUB")
console.log("1 USD equals 0.75 GBP")
let choice
do {
  console.log("What do you want to do?")
  console.log("1-Convert currencies 2-Exit program")
  choice = Number(input())
  while (!(choice === 1 || choice === 2)) {
    console.log("Unknown input")
    console.log("What do you want to do?")
    console.log("1-Convert currencies 2-Exit program ")
    choice = Number(input())
  }
  if (choice === 1) {
    console.log("What do you want to convert?")
    let frome = input("From: ").toUpperCase()
    while (!rate[frome]) {
      console.log("Unknown currency")
      console.log("What do you want to convert?")
      frome = input("From: ").toUpperCase()
    }
    let to = input("To: ").toUpperCase()
    while (!rate[to]) {
      console.log("Unknown currency")
      console.log("What do you want to convert?")
      to = input("To: ").toUpperCase()
    }
    let amount = Number(input("Amount: "))
    while (isNaN(amount)) {
      console.log("The amount has to be a number")
      amount = Number(input("Amount: "))
    }
    while (amount < 1) {
      console.log("The amount cannot be less than 1")
      let amount = Number(input("Amount: "))
    }
    console.log(
      `Result: ${amount} ${frome} equals ${(
        (amount * rate[to]) /
        rate[frome]
      ).toFixed(4)} ${to}`
    )
  }
} while (choice !== 2)
console.log("Have a nice day")
