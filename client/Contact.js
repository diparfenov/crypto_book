import { ethers } from "ethers";
import provider from "./provider";

//abi контракта Contact - находится в artifacts/contracts/ContactFactory.json
const contactAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "string",
                name: "_telegram",
                type: "string",
            },
            {
                internalType: "string",
                name: "_discord",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "desc",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "discord",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_desc",
                type: "string",
            },
        ],
        name: "setDesc",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_discord",
                type: "string",
            },
        ],
        name: "setDiscord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_telegram",
                type: "string",
            },
        ],
        name: "setTelegram",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "telegram",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

//обращамся к контракту Сontact принимая в аргумент адресс такого контракта, потому что их может быть много
const Contact = (address) => new ethers.Contract(address, contactAbi, provider);
export default Contact