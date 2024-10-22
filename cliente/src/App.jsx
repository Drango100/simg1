import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ProductContexProvider } from './contex/ProductContext.jsx';
import Login from './components/login.jsx';
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.usuario.jsx";
import { AuthProvider } from './components/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRouter.jsx';

function App() {
  
  const isAuthenticated = () => {
    // Verifica si hay un token en localStorage
    return !!localStorage.getItem('token');
};
  return (
    <div>
      <AuthProvider>
        <ProductContexProvider>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={<ProtectedRoute element={<ProductPage />} />}
              isAuthenticated={isAuthenticated()} //verifica si esta autenticado
            />
            <Route
              path="/new"
              element={<ProtectedRoute element={<CreateProduct />} />}
              isAuthenticated={isAuthenticated()}
            />
            <Route
              path="/edit/:id"
              element={<ProtectedRoute element={<CreateProduct />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductContexProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
