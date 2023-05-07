// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Escrow {
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, REFUNDED }

    address payable public buyer;
    address payable public seller;
    uint public amount;
    uint public releaseTime;
    State public currentState;

    constructor(
        address payable _buyer, 
        address payable _seller, 
        uint _amount, 
        uint _releaseTime
    ) {
        require(_releaseTime > block.timestamp);
        buyer = _buyer;
        seller = _seller;
        amount = _amount;
        releaseTime = _releaseTime;
        currentState = State.AWAITING_PAYMENT;
    }

    function deposit() payable public {
        require(msg.sender == buyer);
        require(currentState == State.AWAITING_PAYMENT);
        require(msg.value == amount);
        currentState = State.AWAITING_DELIVERY;
    }

    function confirmDelivery() public {
        require(msg.sender == buyer);
        require(currentState == State.AWAITING_DELIVERY);
        seller.transfer(amount);
        currentState = State.COMPLETE;
    }

    function refund() public {
        require(msg.sender == seller);
        require(currentState == State.AWAITING_DELIVERY);
        buyer.transfer(amount);
        currentState = State.REFUNDED;
    }

    function release() public {
        require(currentState == State.AWAITING_DELIVERY);
        require(block.timestamp >= releaseTime);
        seller.transfer(amount);
        currentState = State.COMPLETE;
    }
}
