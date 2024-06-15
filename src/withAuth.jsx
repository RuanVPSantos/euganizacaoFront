import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from './services/api';

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const verifyAuth = async () => {
        try {
          const response = await checkAuth();
          if (response.name) {
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

  ComponentWithAuth.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

  return ComponentWithAuth;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;


