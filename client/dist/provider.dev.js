"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

//обратиться к Метамаску
var provider; //проверяем, находимся лм мы в браузере && есть ли в этом браузере

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  provider = new _ethers.ethers.providers.Web3Provider(window.ethereum);
} //если нет, подлкючаемся к дефолтному
else {
    new _ethers.ethers.providers.JsonRpcProvider();
  }

var _default = provider;
exports["default"] = _default;