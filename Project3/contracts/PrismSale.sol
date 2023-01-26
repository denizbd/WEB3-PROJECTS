//SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract PrismSale {

  uint public totalSales;
  uint public maxSales;

  address public owner;
  address public charity;

  mapping (address => bool) sales;

  constructor() public {
    totalSales = 0;
    maxSales = 100;

    owner = msg.sender;
    charity = 0x60Ad71001Fd6359f233F49adDB83826461958496;

  }

  // can user buy it or is it sold out?

  function canBuy () public view returns (bool) {
    return totalSales < maxSales;
  }

// has user already bought it or not

  function hasAccess () public view returns(bool) {
  return sales[msg.sender];
  }

// buying process

  function buy () public payable returns (bool) {

  require(canBuy() == true, "can't buy this!");
  require(msg.value == 0.01 ether, "you didn't send the correct amount!");
  require(hasAccess() == false, "you already bought it!");

   payable(owner).transfer(msg.value * 80 / 100);
   payable(owner).transfer(msg.value * 20 / 100);

  totalSales = totalSales + 1;

  sales[msg.sender] = true;

  return true;
  }
}
