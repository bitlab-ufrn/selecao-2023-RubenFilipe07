import './FormularioOfensas.css';
import { Form, Input, Button, message } from 'antd';
import ListaOfensas from '../ListaOfensas/ListaOfensas';

import axios from 'axios';
import { Fragment, useState, useEffect } from 'react';

const FormularioOfensas = () => {

    const onFinish = async ({ palavra }) => {

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/palavras-ofensivas`, { palavra }, { headers: { 'api-key': import.meta.env.VITE_API_KEY, } });
            getOfensas();
            message.success('Palavra ofensiva cadastrada com sucesso!');
        } catch (error) {
            message.error('Palavra não cadastrada.');
        }

    };

    const [ofensasCadastradas, setOfensas] = useState([]);
   

    const getOfensas = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/palavras-ofensivas`, { headers: { 'api-key': import.meta.env.VITE_API_KEY, } });
            setOfensas(response.data);
        } catch (error) {
            message.error('Erro ao carregar as ofensas cadastradas.');
        }
    }

    useEffect(() => {
        getOfensas();
    }, []);



    return (
        <Fragment>
        <Form className='form-ofensas' onFinish={onFinish}>
            <h1 className='titulo-form'>Cadastrar Ofensa</h1>

            <Form.Item label="Palavra" name="palavra" rules={[{ required: true, message: 'Insira a palavra ofensiva' }]}>
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Cadastrar
                </Button>
            </Form.Item>
        </Form>
            <ListaOfensas ofensasCadastradas={ofensasCadastradas} getOfensas={getOfensas}/>
        </Fragment>
    )


}

export default FormularioOfensas;