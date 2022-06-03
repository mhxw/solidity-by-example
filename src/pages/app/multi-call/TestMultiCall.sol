// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// 用于获取2个函数在同一个区块的状态值
contract TestMultiCall {
    function test(uint _i) external pure returns (uint) {
        return _i;
    }

    function getData(uint _i) external pure returns (bytes memory) {
        return abi.encodeWithSelector(this.test.selector, _i);
    }
}
