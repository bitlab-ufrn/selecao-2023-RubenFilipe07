import { Fragment, useState } from 'react';
import { Button, Space, Popconfirm, message, Modal, Form, Input } from 'antd';

import './ListaOfensas.css';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';

const ListaOfensas = (props) => {
  const [form] = Form.useForm();
  const [columns, setColumns] = useState([
    {
      title: 'Palavras Cadastradas',
      dataIndex: 'palavra',
      key: 'palavra',
    },
    {
      title: 'Ação',
      key: 'acao',
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Tem certeza que deseja deletar essa palavra?"
            onConfirm={() => deletaPalavra(record.id)}
            okText="Sim"
            cancelText="Não"
          >
            <Button type="primary" danger icon={<DeleteOutlined />} />
          </Popconfirm>
          <Button type="primary" icon={<EditOutlined />} onClick={() => showModal(record)} />
        </Space>
      ),
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const deletaPalavra = (id) => {
    axios
      .delete(`http://localhost:8080/palavras-ofensivas/${id}`, {
        headers: {
          'api-key': 'JhQwXXztY1s5OsSKgj3mMoJ',
        },
      })
      .then((response) => {
        message.success('Palavra deletada com sucesso!');
        props.getOfensas();
      })
      .catch((error) => {
        message.error('Palavra não deletada!');
      });
  };

  const onFinish = (values) => {
    axios.put(`http://localhost:8080/palavras-ofensivas/${editingId}`, values, {
        headers: {
          'api-key': 'JhQwXXztY1s5OsSKgj3mMoJ',
        },
      })
      .then((response) => {
        message.success('Palavra editada com sucesso!');
        props.getOfensas();
        setIsModalVisible(false);
      })
      .catch((error) => {
        message.error('Palavra não editada!');
      });
  };

  const showModal = (record) => {
    setIsModalVisible(true);
    setEditingId(record.id);
    form.setFieldsValue({ palavra: record.palavra });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Table className="lista-ofensas" columns={columns} dataSource={props.ofensasCadastradas} rowKey="id" />
      <Modal title="Editar Palavra" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="Palavra" name="palavra" rules={[{ required: true, message: 'Por favor, insira a palavra!' }]}>
            <Input placeholder="Digite a palavra" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Editar
            </Button>
          </Form.Item>
        </Form>
        </Modal>
    </Fragment>

       

    )


}

export default ListaOfensas;