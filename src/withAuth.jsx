import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from './services/api'; // Certifique-se de que o caminho está correto

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const verifyAuth = async () => {
        try {
          const response = await checkAuth();
          if (response.message === 'User is authenticated') {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            navigate('/login');
          }
        } catch (error) {
          setIsAuthenticated(false);
          navigate('/login');
        }
      };

      verifyAuth();
    }, [navigate]);

    if (isAuthenticated === null) {
      return <p>Loading...</p>;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
