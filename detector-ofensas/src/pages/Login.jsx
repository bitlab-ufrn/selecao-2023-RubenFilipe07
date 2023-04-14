import { Fragment } from 'react';

import {
   Menu,
   Layout
} from 'antd'

import FooterContent from '../components/FooterContent/FooterContent';
import FormularioLogin from '../components/FormularioLogin/FormularioLogin';
import { Link } from 'react-router-dom';

const { Footer, Content } = Layout;

import { HomeOutlined, LoginOutlined, UnorderedListOutlined } from '@ant-design/icons';

const itensMenu = [
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


const Home = () => (
   <Fragment>
      <Layout>
         <Menu mode="horizontal" defaultSelectedKeys={['1']} items={itensMenu} theme='dark' />
         <Content style={{ backgroundColor: "#FFFF" }}>
            <FormularioLogin />
         </Content>

         <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <FooterContent />
         </Footer>

      </Layout>
   </Fragment>

);

export default Home;