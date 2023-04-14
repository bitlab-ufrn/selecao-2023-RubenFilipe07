import { Fragment, useContext } from 'react';

import {
    Menu,
    Layout,
    Button
} from 'antd'

import FooterContent from '../components/FooterContent/FooterContent';
import FormularioDetector from '../components/FormularioDetector/FormularioDetector';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const { Footer, Content } = Layout;

import { HomeOutlined, MenuOutlined, LoginOutlined, UnorderedListOutlined, LogoutOutlined } from '@ant-design/icons';


const Detector = () => {

    const {isAuth, handleLogout} =  useContext(AuthContext);

    const itensMenuNoAuth = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: (<Link to="/">Início</Link>),
        },
        {
            key: '2',
            icon: <UnorderedListOutlined />,
            label: (<Link to="/detector">Detectar Linguagem Imprópria</Link>),
        },
        {
            key: '3',
            icon: <LoginOutlined />,
            label: (<Link to="/login">Login do Administrador</Link>),
        }

    ]

    const itensMenuAuth = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: (<Link to="/">Início</Link>),
        },
        {
            key: '2',
            icon: <UnorderedListOutlined />,
            label: (<Link to="/detector">Detectar Linguagem Imprópria</Link>),
        },
        {
            key: '3',
            icon: <MenuOutlined />,
            label: (<Link to="/gerenciar-ofensas">Gerenciar palavras</Link>),
        },
        {
            key: '4',
            label: (<Button style={{ backgroundColor: "#e52222", color: "white", borderColor: "#e52222" }} onClick={() => { handleLogout() }} icon={<LogoutOutlined />} >Sair</Button>),
        }
    ]

    return (
        <Fragment>
            <Layout>
                {isAuth ? <Menu mode="horizontal" defaultSelectedKeys={['1']} items={itensMenuAuth} theme='dark' /> : <Menu mode="horizontal" defaultSelectedKeys={['1']} items={itensMenuNoAuth} theme='dark' />}
                <Content style={{ backgroundColor: "#FFFF" }}>
                    <FormularioDetector />

                </Content>

                <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <FooterContent />
                </Footer>
            </Layout>
        </Fragment>
    )

};

export default Detector;