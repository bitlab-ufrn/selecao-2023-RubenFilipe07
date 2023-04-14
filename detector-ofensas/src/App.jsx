import 'antd/dist/reset.css';
import 'antd/dist/antd.js';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/privates.routes';
import { AuthContext } from './contexts/authContext';
import { useContext } from 'react';

function App() {
    const { isAuth } = useContext(AuthContext);

    return isAuth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
