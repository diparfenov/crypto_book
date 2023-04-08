import { ethers } from "ethers";

//обратиться к Метамаску
let provider;
//проверяем, находимся лм мы в браузере && есть ли в этом браузере
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    provider = new ethers.providers.Web3Provider(window.ethereum);
}
//если нет, подлкючаемся к дефолтному
else {
    new ethers.providers.JsonRpcProvider();
}

export default provider;
