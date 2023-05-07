// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Escrow.sol";

contract ContractFactory {
    event TransactionCreated(address indexed escrowAddress, address indexed buyer, address indexed seller, uint256 quantity, uint256 releaseTime);

    function createTransaction(address payable buyer, address payable seller, uint256 quantity, uint256 releaseTime) external returns (address) {
        Escrow escrow = new Escrow(buyer, seller, quantity, releaseTime);
        emit TransactionCreated(address(escrow), buyer, seller, quantity, releaseTime);
        return address(escrow);
    }
}
