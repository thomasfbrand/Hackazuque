// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Escrow.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ContractFactory {
    event TransactionCreated(address indexed escrowAddress, address indexed buyer, address payable indexed seller, uint256 quantity, uint256 releaseTime, address indexed tokenAddress);

    function createTransaction(address tokenAddress, address payable buyer, address payable seller, uint256 quantity, uint256 releaseTime) external returns (address) {
        Escrow escrow = new Escrow(tokenAddress, buyer, seller, quantity, releaseTime);
        emit TransactionCreated(address(escrow), buyer, seller, quantity, releaseTime, tokenAddress);
        return address(escrow);
    }

    function approveToken(address tokenAddress, address spender, uint256 amount) external {
        IERC20 token = IERC20(tokenAddress);
        bool success = token.approve(spender, amount);
        require(success, "Failed to approve token");
    }

    function transferToken(address tokenAddress, address to, uint256 amount) external {
        IERC20 token = IERC20(tokenAddress);
        bool success = token.transfer(to, amount);
        require(success, "Failed to transfer token");
    }

    function transferTokenFrom(address tokenAddress, address from, address to, uint256 amount) external {
        IERC20 token = IERC20(tokenAddress);
        bool success = token.transferFrom(from, to, amount);
        require(success, "Failed to transfer token from");
    }
}
