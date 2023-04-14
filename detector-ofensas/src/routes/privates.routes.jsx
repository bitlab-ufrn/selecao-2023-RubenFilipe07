import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Erro from '../pages/Erro'
import GerenciaOfensas from '../pages/GerenciaOfensas'
import Detector from '../pages/Detector'

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gerenciar-ofensas" element={<GerenciaOfensas />} />
                <Route path="/detector" element={<Detector />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes;