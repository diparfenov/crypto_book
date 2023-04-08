"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var _provider = _interopRequireDefault(require("./provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//abi контракта Contact - находится в artifacts/contracts/ContactFactory.json
var contactAbi = [{
  inputs: [{
    internalType: "address",
    name: "_owner",
    type: "address"
  }, {
    internalType: "string",
    name: "_telegram",
    type: "string"
  }, {
    internalType: "string",
    name: "_discord",
    type: "string"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  inputs: [],
  name: "desc",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "discord",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_desc",
    type: "string"
  }],
  name: "setDesc",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_discord",
    type: "string"
  }],
  name: "setDiscord",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_telegram",
    type: "string"
  }],
  name: "setTelegram",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "telegram",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}]; //обращамся к контракту Сontact принимая в аргумент адресс такого контракта, потому что их может быть много

var contact = function contact(address) {
  return new _ethers.ethers.Contract(address, contactAbi, _provider["default"]);
};

var _default = contact;
exports["default"] = _default;