import './FormularioDetector.css';
import { Fragment, useEffect, useState } from 'react';
import { Form, Input, Button, message, Table, Modal, Card } from 'antd';
import axios from 'axios';

const FormularioLogin = () => {

    const [resultadoApi, setResultadoApi] = useState([
        {
            qtdPalavrasDetectadas: 0,
            qtdPalavrasCadastradas: 0,
            palavrasDetectadas: [],
            porcetagemDetecadasTexto: 0,
            textoCensurado: '',
        }
    ]);
    const [visible, setVisible] = useState(false);

    const onFinish = async ({ texto }) => {
        const response = await axios.post('http://localhost:8080/verifica-texto', { texto }, { headers: { 'api-key': 'JhQwXXztY1s5OsSKgj3mMoJ', } });
        setResultadoApi(response.data);
    };

   useEffect(() => {
        if (resultadoApi.qtdPalavrasDetectadas > 0) {
            setVisible(true);
            console.log(resultadoApi);
        }
    }, [resultadoApi]);

    return (
        <Fragment>

            <Form className='form-detector' onFinish={onFinish}>

                <h1 className='titulo-form'>Detector de Ofensas</h1>

                <Form.Item className='textarea-detector' label="Texto" name="texto" rules={[{ required: true, message: 'Insira o texto' }]}>
                    <Input.TextArea rows={10} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Detectar
                    </Button>
                </Form.Item>
       
                    <Fragment>
                        <Modal
                            title="Resultado da detecção"
                            open={visible}
                            footer={null}
                            onCancel={() => setVisible(false)}
                        >

                            <Card title="Palavras detectadas no texto" >
                                {
                                    resultadoApi.qtdPalavrasDetectadas > 0 ?
                                    <p>Palavras detectadas: {resultadoApi.palavrasDetectadas.map(
                                        (palavra, index) => {
                                            return (
                                                <span key={index}>"{palavra}" </span>
                                            )
                                        }
                                    ) }</p> : <></>

                                }
                                
                                <p>Quantidade: {resultadoApi.qtdPalavrasDetectadas}</p>
                            </Card>

                            <Card title="Total de palavras cadastradas">
                                <p>Palavras cadastradas: {resultadoApi.qtdPalavrasCadastradas}</p>
                            </Card>

                            <Card title="Texto Censurado">
                                <p>{resultadoApi.textoCensurado}</p>
                            </Card>

                            <Card title="Porcentagem impróprias">
                                { resultadoApi.porcetagemDetecadasTexto > 0 ?
                                <p>{resultadoApi.porcetagemDetecadasTexto.toFixed(2)}% das palavras do texto são impróprias</p> : <></>}
                            </Card>
                   </Modal>
                    </Fragment>

                
              

            </Form>






        </Fragment>
    )


}

export default FormularioLogin;