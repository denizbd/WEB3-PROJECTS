import Web3 from 'web3'
import Planetary from './Planetary.json'

let web3 = new Web3("https://goerli.infura.io/v3/c550f6f3ab7e463e8ccef8ec5fd0c14b")

const contractAddress = "0xF6A1AA5657D9bb071133734032d40CfBd0091c56"
const contract = null // new web3.eth.Contract(Planetary.abi, contractAddress)

export { web3, contract, contractAddress }