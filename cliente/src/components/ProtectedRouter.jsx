import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  // Si no está autenticado, redirige a /login
if (!isAuthenticated) {
    return <Navigate to="/login" />;
}

  // Si está autenticado, renderiza el componente que debe ser protegido
return element;
};

export default ProtectedRoute;
