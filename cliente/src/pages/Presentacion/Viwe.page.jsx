import { useEffect } from 'react';
import Viwe from '../../components/Presentaciones.jsx';
import { useViwe } from '../../contex/Presentacio.jsx';


function ViwePage() {
const {presentacion,loadViwe} = useViwe()
    

    useEffect(()=> {
        loadViwe()
    }, []);

    function renderMain(){
        if(presentacion.length === 0) return <h1>No hay presentaciones ingresadas aun</h1>
        
        return presentacion.map((presentacion) => (
            <Viwe presentacion={presentacion} key={presentacion.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de Presentaciones
        </h1>
    {renderMain()}
    </div>
)
}
export default ViwePage;