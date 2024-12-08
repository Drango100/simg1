import { useEffect } from 'react';
import ProductCart from '../../components/ProductCart.jsx';
import {useProducto} from '../../contex/ProductContext.jsx';

import 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
function ProductPage() {
const {producto,loadProductos} = useProducto()
const navigate = useNavigate();

    useEffect(()=> {
        loadProductos()
    }, []);

    function renderMain(){
        if(producto.length === 0) return <h1>No hay productos ingresados aun</h1>
        
        return producto.map((producto) => (
            <ProductCart producto={producto} key={producto.id} />
        ))
    };
    const handleProductCreate = () =>{
        navigate("/new")
    }

return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de productos
        </h1>
        <div>
        <button onClick ={handleProductCreate} className='Crear'>Crear un Producto</button>
        </div>
    {renderMain()}
    </div>
)
}
export default ProductPage;
