"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var _provider = _interopRequireDefault(require("./provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//адресс задеплоиного контракта ContactFactory
var address = "0xE2B5783c5D7046c2efC8997B114d70E9987FB8d0"; //пользоваться можно любым методом abi
//abi контракта ContactFactory - находится в artifacts/contracts/ContactFactory.json

var abi = [{
  inputs: [{
    internalType: "string",
    name: "_telegram",
    type: "string"
  }],
  name: "createContact",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_telegram",
    type: "string"
  }, {
    internalType: "string",
    name: "_discord",
    type: "string"
  }],
  name: "createContact",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "ownerToContact",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}]; //abi контракта ContactFactory через собственно написание функций 

var ethAbi = ["function ownerToContact(address) public view returns (address)", "function createContact(string, string) public", "function createContact(string) public"]; //обращамся к контракту contactFactory

var contactFactory = new _ethers.ethers.Contract(address, abi, _provider["default"]);
var _default = contactFactory;
exports["default"] = _default;