import { Button, Menu } from "semantic-ui-react";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
    //стейт с выбранным аккаунтом
    const [currentAccount, setCurrentAccount] = useState();

    const handleLogInClick = async () => {
        //забираем у всего окна переменную ethereum
        const { ethereum } = window;
        
        if (!ethereum) {
            alert("У вас нет Метамаска!");
        }

        try {
            //обращаемся к первому аккаунту в метамаске
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            //передаем его в стейт
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);
            console.log(currentAccount);
        }
    };
    return (
        <Menu style={{ marginTop: "20px" }}>
            <Link href="/">
                <Menu.Item Home>Главная</Menu.Item>
            </Link>
            <Link href="/add">
                <Menu.Item>Записать контакт</Menu.Item>
            </Link>
            <Link href="/show">
                <Menu.Item>Посмотреть контакт</Menu.Item>
            </Link>
            <Menu.Item position="right">
                {!currentAccount ? (
                    <Button primary onClick={handleLogInClick}>
                        Вход
                    </Button>
                ) : (
                    <Link href="/user">
                        <Button primary onClick={handleLogInClick}>
                            {currentAccount}
                        </Button>
                    </Link>
                )}
            </Menu.Item>
        </Menu>
    );
};

export default Header;
