import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPage from "./pages/Product/ProductPage.jsx";
import CreateProduct from "./pages/Product/CreateProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ProductContexProvider } from './contex/ProductContext.jsx';
import Login from './components/login.jsx';
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.usuario.jsx";
import { AuthProvider } from './components/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRouter.jsx';
import Header from './pages/home/heder.simg.jsx';
import Services from './pages/home/SectionServices.jsx';
import Main from './pages/home/Main.jsx';
import Contacto from'./pages/home/Conatact.jsx';
import Footer from './pages/home/Footer.jsx';
// import { CategoryContexProvider } from "./contex/Category.contex.jsx";
// import CreateCategory from "./pages/categoria/Crear.Categoria.jsx";
// import CategoryPage from "./pages/categoria/Categoria.page.jsx";

function App() {
  
  const isAuthenticated = () => {
    // Verifica si hay un token en localStorage
    return !!localStorage.getItem('token');
};
  return (
    
    <div>
        <AuthProvider>
          <ProductContexProvider>
          {/* <Navbar/>  */}
            <Routes>
              {/* Ruta para la página principal (Home) */}
              <Route
                path="/home"
                element={
                  <>
                    <Header />
                    <Services />
                    <Main />
                    <Contacto />
                    <Footer />
                  </>
                }
              />
              {/* Rutas de autenticación */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              
              {/* Rutas protegidas */}
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
          
          {/*VALIDAR QUE FUNCIONE LAS RUTAS DE CATEGORIA<CategoryContexProvider> */}
          {/* <Navbar /> */}
            {/* <Routes> */}
              {/* <Route path="/Categorys" element={<CategoryPage />} /> */}
              {/* <Route path="/newCategory"element={<CreateCategory/>}/> */}
              {/* <Route path="/edit/:id"element={<CreateCategory/>}/> */}
              {/* </Routes> */}
          {/* </CategoryContexProvider> */}
        </AuthProvider>
    </div>
  );
}

export default App;
