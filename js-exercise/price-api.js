// source : https://www.javascript.express/exercises/price_api
import fetch from 'node-fetch'

const COINDESK_API = 'https://api.coindesk.com/v1/bpi/historical/close.json'

const fetchData = async () => {
   const response = await fetch(COINDESK_API)
   const data = await response.json()
   return data
}

const printData = async () => {
   try {
	const data = await fetchData()
	console.log('Data', data)
   } catch (error) {
	console.log('Error', error)
   }
}

printData()
