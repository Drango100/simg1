import { useEffect } from 'react';
import Proveedor from '../../components/Proveedor.jsx';
import {useProveedor} from '../../contex/Proveedores.jsx';

import 'react-bootstrap';
function ProveedorPage() {
const {proveedor,loadProveedores} = useProveedor()
    

    useEffect(()=> {
        loadProveedores()
    }, []);

    function renderMain(){
        if(proveedor.length === 0) return <h1>No hay Proveedor ingresados aun</h1>
        
        return proveedor.map((proveedor) => (
            <Proveedor proveedor={proveedor} key={proveedor.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de Proveedores
        </h1>
        <div>
        <button className='Crear'>Crear un Proveedor</button>
        </div>
    {renderMain()}
    </div>
)
}
export default ProveedorPage;