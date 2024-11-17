import { useEffect } from 'react';
import Salida from '../../components/Salidas.jsx';
import {useSalida} from '../../contex/Salidas.Contex.jsx';


function SaldiaPage() {
const {salida,loadSalida} = useSalida()
    

    useEffect(()=> {
        loadSalida()
    }, []);

    function renderMain(){
        if(!salida || salida.length === 0) return <h1>No hay Salidas ingresadas aun</h1>
        
        return salida.map((salida) => (
            <Salida salida={salida} key={salida.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de Salidas
        </h1>
        <div>
        <button className='Crear'>Crear un Salida</button>
        </div>
    {renderMain()}
    </div>
)
}
export default SaldiaPage;
