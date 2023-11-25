// contracts/ChanCoin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChanCoin is ERC20 {
    constructor() ERC20("ChanCoin", "CHAN") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}
