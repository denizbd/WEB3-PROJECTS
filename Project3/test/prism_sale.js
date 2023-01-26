const PrismSale = artifacts.require("PrismSale");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("PrismSale", function (accounts) {
  it("should assert true", async function () {
    await PrismSale.deployed();
    return assert.isTrue(true);
  });

  it("should get the right accounts", async function () {
    const contract = await PrismSale.deployed()

    const owner = await contract.owner.call()
    const charity = await contract.charity.call()


    assert.isTrue(owner == 0xcD8502A6Ecc393D7206BBB61396720166808C6b6)
    assert.isTrue(charity == 0x60Ad71001Fd6359f233F49adDB83826461958496)
  })

  it("should split the payment to owner and charity", async function() {
    const contract = await PrismSale.deployed()

//BN means big numnber 
    const startBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]))

    const purchase = await contract.buy.sendTransaction({
    
      from: accounts[0],
      value: web3.utils.toWei("0.01", "ether")
    })

    const commission = web3.utils.toBN(web3.utils.toWei("0.008", "ether"))
    const endBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]))

    assert.equal(
    startBalance.add(commission).toString(), 
    endBalance.toString()
  
  )
  })
});
