import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useState } from "react";
import provider from "../provider";
import contactFactory from "../contactfactory";

const AddContact = () => {
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const hadleSubmit = async (event) => {
        event.preventDefault();
        //сбрасываем стейты перед новой формой
        setErrorMessage("");
        setSuccessMessage("");

        if(!telegram) {
            setErrorMessage("Ну хоть телеграм заполни...")
        }
        
        //берем signer
        const signer = provider.getSigner()
        //конектимся к контракту от его имени
        const contactFactoryWithSigner = contactFactory.connect(signer);
        //посмотреть все функции достпные контракту
        console.log("func: ", contactFactoryWithSigner.functions);
        //пробуем вызвать от его имени функцию createContact с 2-мя аргументами из стейта
        //если используется перегруженная функция, то ее надо записывать без "." и заключать ее
        //в квадратне скобки [], и в круглых скобках () указывать типы и количество передаваемых аргументов
        try {
            let response;

            if(discord) {
                response = await contactFactoryWithSigner["createContact(string,string)"](telegram, discord);
            } else {
                response = await contactFactoryWithSigner["createContact(string)"](telegram, discord);
                console.log("createContact(string)");
            }
            
            console.log("response: ", response );
            setSuccessMessage("Хэш транзакции такой: " + response.hash)

        } catch(error) {
            console.error("error: ", error);
            setErrorMessage(error.message);

        }
    }

    return (
        <Layout>
            <Form error = {!!errorMessage} success = {!!successMessage} onSubmit={hadleSubmit}>
                <Form.Group widths="equal">
                    <Form.Field
                        control={Input}
                        label="Telegram"
                        value={telegram}
                        onChange={(event) => setTelegram(event.target.value)}
                        placeholder='Введите здесь'
                    />
                    <Form.Field
                        control={Input}
                        label="Discord"
                        value={discord}
                        onChange={(event) => setDiscord(event.target.value)}
                        placeholder='Введите здесь'
                    />
                </Form.Group>
                <Button primary >Сохранить</Button>
                {/* в content записывается ошибка из стейта*/}
                <Message style={{wordBreak:'break-word'}} error header="Ну чтож такое!" content={errorMessage} />
                {/* в content записывается успех из стейта*/}
                <Message success header="Успех!" content={successMessage} />
            </Form>
        </Layout>
    );
};

export default AddContact;
