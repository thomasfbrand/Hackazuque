// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow {
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, REFUNDED }

    address public tokenAddress;
    address payable public buyer;
    address payable public seller;
    uint public amount;
    uint public releaseTime;
    State public currentState;

    constructor(
        address _tokenAddress,
        address payable _buyer,
        address payable _seller,
        uint _amount,
        uint _releaseTime
    ) {
        require(_releaseTime > block.timestamp);
        require(IERC20(_tokenAddress).balanceOf(_buyer) >= _amount, "Buyer balance is not sufficient");
        tokenAddress = _tokenAddress;
        buyer = _buyer;
        seller = _seller;
        amount = _amount;
        releaseTime = _releaseTime;
        currentState = State.AWAITING_PAYMENT;
    }

    function deposit() public {
        require(msg.sender == buyer);
        require(currentState == State.AWAITING_PAYMENT);
        require(IERC20(tokenAddress).allowance(buyer, address(this)) >= amount, "Contract allowance is not set");
        require(IERC20(tokenAddress).transferFrom(buyer, address(this), amount), "Token transfer failed");
        currentState = State.AWAITING_DELIVERY;
    }

    function confirmDelivery() public {
        require(msg.sender == buyer);
        require(currentState == State.AWAITING_DELIVERY);
        require(IERC20(tokenAddress).transfer(seller, amount), "Token transfer failed");
        currentState = State.COMPLETE;
    }

    function refund() public {
        require(msg.sender == seller);
        require(currentState == State.AWAITING_DELIVERY);
        require(IERC20(tokenAddress).transfer(buyer, amount), "Token transfer failed");
        currentState = State.REFUNDED;
    }

    function release() public {
        require(currentState == State.AWAITING_DELIVERY);
        require(block.timestamp >= releaseTime);
        require(IERC20(tokenAddress).transfer(seller, amount), "Token transfer failed");
        currentState = State.COMPLETE;
    }
}
