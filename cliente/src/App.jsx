import { Routes, Route,} from "react-router-dom";
import ProductPage from "./pages/Product/ProductPage.jsx";
import CreateProduct from "./pages/Product/CreateProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import  {ProductContexProvider}  from './contex/ProductContext.jsx';
import {CategoryContexProvider}  from "./contex/Category.contex.jsx";
import Login from './components/login.jsx';
import Register from "./components/Register.usuario.jsx";
import { AuthProvider } from './components/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRouter.jsx';
import Header from './pages/home/heder.simg.jsx';
import Services from './pages/home/SectionServices.jsx';
import Main from './pages/home/Main.jsx';
import Contacto from'./pages/home/Conatact.jsx';
import Footer from './pages/home/Footer.jsx';
import CreateCategory from "./pages/categoria/Crear.Categoria.jsx";
import CategoryPage from "./pages/categoria/Categoria.page.jsx";
import Menu from './components/Menu.jsx';
import {CategoryMarcaProvider } from "./contex/Marca.jsx";
import MarcaPage from "./pages/marca/Marca.paje.jsx";
import CreateMarca from "./pages/marca/Crear.Marca.jsx";
import ClientePage from "./pages/Cliente/Cliente.page.jsx";
import CreateCliete from './pages/Cliente/Crear.Cliente.jsx'
import {CategoryClienteProvider}  from './contex/Clientes.jsx';
import {CategoryEntradaProvider} from './contex/Entradas.jsx';
import EntradaPage from './pages/Entradas/Entrada.page.jsx';
import CreateEntrada from './pages/Entradas/Crear.Entrada.jsx';
import {CategoryViweProvider} from './contex/Presentacio.jsx';
import ViwePage from './pages/Presentacion/Viwe.page.jsx';
import CreateViwe from './pages/Presentacion/Crear.Viwe.jsx';
import {ProveedorContexProvider} from './contex/Proveedores.jsx';
import ProveedorPage from "./pages/Proveedores/Proveedore.page.jsx";
import CreateProveedor from './pages/Proveedores/Crear.Proveedores.jsx';
import {CategorySalidaProvider } from "./contex/Salidas.Contex.jsx";
import SalidaPage from './pages/Salidas/Salida.Page.jsx';
import CreateSalida from './pages/Salidas/Crear.Salida.jsx'
import { CategoryTpEntradaProvider } from "./contex/tp.entrada.jsx";
import TpEntradaPage from './pages/TpEntrada/TpEntrada.page.jsx';
import CreateTpEntrada from './pages/TpEntrada/Crear.TpEntrada.jsx';
import { CategoryTpSalidaProvider } from "./contex/Tp.salida.jsx";
import TpSalidaPage from './pages/TpSalidas/TpSalida.page.jsx';
import CreateTpSalida from './pages/TpSalidas/Crear.TpSalida.jsx';
import {CategoryMedidaProvider} from './contex/U.Medida.jsx';
import CreateMadida from './pages/Medida/Crear.U.Medida.jsx';
import MedidaPage from './pages/Medida/U.Medida.Page.jsx';




function App() {
  
  const isAuthenticated = () => {
    // Verifica si hay un token en localStorage
    return !!localStorage.getItem('token');
};
  return (
    
    <div>
        <AuthProvider>
          <ProductContexProvider>
            <CategoryContexProvider>
              <CategoryMarcaProvider>
                <CategoryClienteProvider>
                    <CategoryEntradaProvider>
                    <CategoryViweProvider>
                      <ProveedorContexProvider>
                        <CategorySalidaProvider>
                          <CategoryTpEntradaProvider>
                            <CategoryTpSalidaProvider>
                              <CategoryMedidaProvider>
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
                        <Route path="/Menu" element={<Menu />} />
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
      {/* Rutas de categoria */}
                      <Route path="/Categorys" element={<CategoryPage />} />
                        
                      <Route path="/new/Category"element={<CreateCategory/>}/>

                      <Route path="/edit/Category/:id"element={<CreateCategory/>}/>
      {/* Rutas de Marca */}
                      
                      <Route path="/Marca" element={<MarcaPage/>}/>
                      
                      <Route path="/new/Marca" element={<CreateMarca/>}/>

                      <Route path="/edit/Marca/:id"element={<CreateMarca/>}/>
      {/* Rutas de Cliente */}

                      <Route path="/Clientes" element={<ClientePage/>}/>
                      
                      <Route path="/new/Cliete" element={<CreateCliete/>}/>

                      <Route path="/edit/Cliente/:id"element={<CreateCliete/>}/>
              {/* Rutas de Entradas */}

                    <Route path="/Entradas" element={<EntradaPage/>}/>
                      
                    <Route path="/new/Entrada" element={<CreateEntrada/>}/>

                    <Route path="/edit/Entrada/:id"element={<CreateEntrada/>}/>
              {/* Rutas de Presentaciones */}

                    <Route path="/Viwes" element={<ViwePage/>}/>
                      
                    <Route path="/new/Viwe" element={<CreateViwe/>}/>

                    <Route path="/edit/Viwe/:id"element={<CreateViwe/>}/>

              {/* Rutas de Proveedores */}
                      <Route path="/Proveedores" element={<ProveedorPage/>}/>
                      
                      <Route path="/new/Proveedor" element={<CreateProveedor/>}/>

                      <Route path="/edit/Proveedor/:id"element={<CreateProveedor/>}/>
                {/* Rutas de Proveedores */}
                    <Route path="/Salidas" element={<SalidaPage/>}/>
                      
                    <Route path="/new/Salida" element={<CreateSalida/>}/>

                    <Route path="/edit/Salida/:id"element={<CreateSalida/>}/>
                    {/* Rutas de Tipos de Entardas */}
                    <Route path="/Tpenters" element={<TpEntradaPage/>}/>
                      
                    <Route path="/new/Tpenter" element={<CreateTpEntrada/>}/>

                    <Route path="/edit/Tpenter/:id"element={<CreateTpEntrada/>}/>
                    {/* Rutas de Tipos de salidas */}
                    <Route path="/Tsalidas" element={<TpSalidaPage/>}/>
                      
                    <Route path="/new/Tsalida" element={<CreateTpSalida/>}/>

                    <Route path="/edit/Tsalida/:id"element={<CreateTpSalida/>}/>
                    {/* Rutas de Unidad de Medida */}
                    <Route path="/Umedidas" element={<MedidaPage/>}/>
                      
                    <Route path="/new/Umedida" element={<CreateMadida/>}/>

                    <Route path="/edit/Umedida/:id"element={<CreateMadida/>}/>
                    </Routes>
                    </CategoryMedidaProvider>
                    </CategoryTpSalidaProvider>
                    </CategoryTpEntradaProvider>
                    </CategorySalidaProvider>
                    </ProveedorContexProvider>
                    </CategoryViweProvider>
                    </CategoryEntradaProvider>
                  </CategoryClienteProvider>
                </CategoryMarcaProvider>     
              </CategoryContexProvider>
          </ProductContexProvider>
          
        </AuthProvider>
    </div>
  );
}

export default App;
