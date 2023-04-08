import contact from "../../contact";
import contactfactory from "../../contactfactory";

const getcontactbyaddress= async (address) => {
    //пробуем обратиться к мэпингу контракта contactFactory, чтобы узнать адрес
    //контракта Contact, в аргументе указав EOA address, который прописываем в input
    const contactAddress = await contactfactory.ownerToContact(address);
    //если по такому адресу EOA нет записей, то выводим ошибку
    if(contactAddress === "0x0000000000000000000000000000000000000000") {
        //выбросить новую ошибку и выполнение функции прервется
        throw new Error("Такой контакт не найден!")
    }
    console.log("contactAddress:", contactAddress);

    //обращаеаемся к контракту типа Contact, передав туда полученный адресс
    const usercontact = contact(contactAddress);

    //достаем оттуда значение телегерам
    const telegram = await usercontact.telegram();
    console.log("telegram :", telegram);

    //достаем оттуда значение дискорд
    const discord = await usercontact.discord();
    console.log("discord :", discord);

    //достаем оттуда значение деск
    const desc = await usercontact.desc();
    console.log("desc :", desc);

    //возвращаем значения 
    return { telegram, discord, desc }
};
export default getcontactbyaddress
