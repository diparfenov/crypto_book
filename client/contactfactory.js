import { ethers } from "ethers";
import provider from "./provider";

//адресс задеплоиного контракта ContactFactory
const address = "0xE2B5783c5D7046c2efC8997B114d70E9987FB8d0";

//пользоваться можно любым методом abi

//abi контракта ContactFactory - находится в artifacts/contracts/ContactFactory.json
const abi = [
{
    inputs: [
        {
            internalType: "string",
            name: "_telegram",
            type: "string",
        },
    ],
    name: "createContact",
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
        {
            internalType: "string",
            name: "_discord",
            type: "string",
        },
    ],
    name: "createContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
},
{
    inputs: [
        {
            internalType: "address",
            name: "",
            type: "address",
        },
    ],
    name: "ownerToContact",
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
];

//abi контракта ContactFactory через собственно написание функций 
const ethAbi = [
    "function ownerToContact(address) public view returns (address)",
    "function createContact(string, string) public",
    "function createContact(string) public",
];
//обращамся к контракту contactFactory
const contactfactory = new ethers.Contract(address, abi, provider);

export default contactfactory
