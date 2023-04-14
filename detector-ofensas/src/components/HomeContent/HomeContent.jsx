import './HomeContent.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import demo_caracteres from '../../assets/demo_caracteres.gif';
import demo_remover from '../../assets/demo_remover.gif';

const HomeContent = () => (
    <div className='inicio'>
        <div className='apresentacao'>
            <img src={logo} alt="Logo" />
            <h1>Bem-vindo ao nosso detector de ofensas!</h1>
            <p>Nosso objetivo é tornar a internet um lugar mais seguro e saudável para todos. Por isso, criamos um sistema de detecção de palavrões e ofensas que bloqueia automaticamente comentários indevidos em suas postagens.</p>
            <p>Com nosso detector de ofensas dinâmico, você pode personalizar a lista de palavras a serem detectadas de acordo com as necessidades do seu negócio.</p>
            <img src={demo_remover} alt="Demonstração da funcionalidade de remover ofensa" />
            <p>Além disso, nossa ferramenta é capaz de detectar palavras com ou sem acentos e/ou caracteres especiais que simulam uma letra, garantindo que nenhum comentário inapropriado passe despercebido.</p>
            <img src={demo_caracteres} alt="Demotração da funcionalidade de detectar caracteres especiais" />
            <p>Experimente agora mesmo nosso detector de ofensas dinâmico e comece a criar um ambiente online mais positivo e respeitoso.</p>
            <Link to={'/detector'}>
                <Button type="primary" size="large">Experimente agora</Button>
            </Link>

        </div>
    </div>

);

export default HomeContent;