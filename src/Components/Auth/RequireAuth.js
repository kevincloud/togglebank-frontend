import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.user) {
    <Navigate to="/" state={{ from: location }} />
  }

  return children;
}

export default RequireAuth;