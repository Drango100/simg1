import { Navigate } from 'react-router-dom';
import {useAuth} from './AuthContext';
const ProtectedRoute = ({ element}) => {
  const {isAuthenticated} = useAuth();
if (!isAuthenticated) {
    return <Navigate to="/login" />;
}

  // Si está autenticado, renderiza el componente que debe ser protegido
return element;
};

export default ProtectedRoute;
