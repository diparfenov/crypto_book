import Layout from "../components/Layout";
import { Form, Button, Message } from "semantic-ui-react";
import { useRef, useState } from "react";
import getContactByAddress from "./utils/getContactByAddress";

const ShowContact = () => {
    //стейт для отслеживания ошибки
    const [errorMessage, setErrorMessage] = useState("");
    //стейт для загрузки при нажатии кнопки
    const [isLoading, setLoading] = useState(false);
    //стейт для полученный значений из Contact
    const [telegram, setTelegram] = useState();
    const [discord, setDiscord] = useState();
    const [desc, setDesc] = useState();
    //юзреф для формы
    const addressRef = useRef();

    //функция для сабмита кнопки
    const hadleSubmit = async (event) => {
        event.preventDefault();
        //текущее значение инпута
        const address = addressRef.current.value;
        //если адреса есть - ошибки нет 
        setErrorMessage("");
        //обнуляем стейты при новом запросе
        setTelegram("")
        setDiscord("")
        setDesc("")
        
        //если адреса нет - ошибка
        if (!address) {
            setErrorMessage("Адрес пользователя то нам нужен...");
            return;
        }

        setLoading(true)

        //достаем данные из контракта Contact по адресу EOA
        //- используем try-catch т.к. жто делается через await
        try {
            const contact = await getContactByAddress(address);
            //меняем стейт
            setTelegram(contact.telegram)
            setDiscord(contact.discord)
            setDesc(contact.desc)
        } //отлавливаем ошибку и добавляем ее в стейт с ошибками
            catch (error) {
                console.error(error);
                setErrorMessage(error.message);
            } //когда все загрузилось или не загрузилось делам лоадинг фалс
            finally {
                setLoading(false)
            }
    };

    return (
        <Layout>
            {/* если ошибки нет, то <Message/> не вылазит*/}
            <Form error={!!errorMessage} onSubmit={hadleSubmit}>
                <Form.Field>
                    <label>Введите адрес здесь</label>
                    <input ref={addressRef} placeholder="Вот прям тут" />
                </Form.Field>

                <Button loading={isLoading}  primary type="submit">
                    Посмотреть
                </Button>
                {/* в content записывается ошибка из стейта*/}
                <Message error header="Ну чтож такое!" content={errorMessage} />
            </Form>
            {telegram && <h2>Telegram: {telegram}</h2>}
            {discord && <h2>Discord: {discord}</h2>}
            {desc && <h2>Desc: {desc}</h2>}
        </Layout>
    );
};

export default ShowContact;
