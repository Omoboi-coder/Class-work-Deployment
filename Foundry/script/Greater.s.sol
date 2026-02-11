// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {Greater} from "../src/Greater.sol";

contract GreaterScript is Script {
    Greater public greater;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        greater = new Greater();

        vm.stopBroadcast();
    }
}
