import './FormularioTextoSensivel.css';
import { Form, Input, Button } from 'antd';


const FormularioLogin = () => {
    return (

        <Form className='form-detector'>

            <h1 className='titulo-form'>Detector de Ofensas</h1>

            <Form.Item className='textarea-detector' label="Texto" name="texto" rules={[{ required: true, message: 'Insira o texto' }]}>
                <Input.TextArea rows={10} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Detectar
                </Button>
            </Form.Item>
        </Form>
    )


}

export default FormularioLogin;