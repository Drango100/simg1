import { useEffect } from 'react';
import Clientes from '../../components/Clientes.jsx';
import {useCliente} from '../../contex/Clientes.jsx';

function ClientePage() {
const {cliente,loadCliente} = useCliente()
    

    useEffect(()=> {
        loadCliente()
    }, []);

    function renderMain(){
        if(!cliente || cliente.length === 0) return <h1>No hay Clientes ingresados aun</h1>
        
        return cliente.map((cliente) => (
            <Clientes cliente={cliente} key={cliente.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de Clientes
        </h1>
        <div>
        <button className='Crear'>Crear un Cliente</button>
        </div>
    {renderMain()}
    </div>
)
}
export default ClientePage;
