import './FormularioLogin.css';
import { Form, Input, Button, message } from 'antd';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FormularioLogin = () => {

    const { setIsAuth, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const manageToken = (token) => {
        sessionStorage.setItem('token', token);
        localStorage.setItem('token', token);
        setToken(token);
        setIsAuth(true);
    }


    const onFinish = async ({ email, senha }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/login-admin`, { email, senha }, { headers: { 'api-key': import.meta.env.VITE_API_KEY, } });
            const { token } = response.data;
            message.success('Login efetuado com sucesso!');
            manageToken(token);
            navigate('/');
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                message.error('Email ou senha inválidos');
            } else {
                message.error('Ocorreu um erro ao efetuar o login. Tente novamente mais tarde.');
            }
        }
    };


    return (

        <Form className='form-login' onFinish={onFinish}>
            <h1 className='titulo-form'>Login</h1>

            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Insira o seu email' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Senha" name="senha" rules={[{ required: true, message: 'Insira a sua senha' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    )


}

export default FormularioLogin;