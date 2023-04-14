import { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
      setIsAuth(true);
    }
  }, []);


  const handleLogout = () => {
    setIsAuth(false);
    setToken('');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;