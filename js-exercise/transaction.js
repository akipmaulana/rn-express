// source : https://www.javascript.express/exercises/transactions

const data = `id,currency,value
1,BTC,0.152
2,ETH,-0.024
3,BTC,1.137
4,BTC,-0.386
5,ETH,0.519`

const headers = data.slice(0, data.indexOf("\n")).split(",");

const rows = data.slice(data.indexOf("\n") + 1).split("\n");

const currencyIdx = headers.indexOf("currency");
const valueIdx = headers.indexOf("value"); 

const currencySet = new Set(rows.map(item => item.split(",")[currencyIdx]))
const currencyList = [...currencySet]
console.log("List of currency", currencyList)

let largestCurrencyList = []
currencyList.forEach(item => {
   let selectedCurrencyList = rows.filter(row => row.includes(item)).map(row => row.split(",")[valueIdx]);
   let largestValue = Math.max(...selectedCurrencyList)
   largestCurrencyList = [...largestCurrencyList, `${item}: ${largestValue}`]
})

console.log("Largest Currency", largestCurrencyList);


