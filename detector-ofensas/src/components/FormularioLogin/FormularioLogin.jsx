import './FormularioLogin.css';
import { Form, Input, Button } from 'antd';


const FormularioLogin = () => {
   return (

            <Form className='form-login'>
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