import { useEffect } from 'react';
import ProductCart from '../../components/ProductCart.jsx';
import {useProducto} from '../../contex/ProductContext.jsx';
import '../css/Product.page.css';

function ProductPage() {
const {producto,loadProductos} = useProducto()
    

    useEffect(()=> {
        loadProductos()
    }, []);

    function renderMain(){
        if(producto.length === 0) return <h1>No hay productos ingresados aun</h1>
        
        return producto.map((producto) => (
            <ProductCart producto={producto} key={producto.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de productos
        </h1>
    {renderMain()}
    </div>
)
}
export default ProductPage;
