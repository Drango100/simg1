import { useEffect } from 'react';
import TpSalida from '../../components/Tp.salida.jsx';
import { useTpSalida } from '../../contex/Tp.salida.jsx';


function TpSalidaPage() {
const {tipo_salida,loadTpSalida} = useTpSalida()
    

    useEffect(()=> {
        loadTpSalida()
    }, []);

    function renderMain(){
        if(tipo_salida.length === 0) return <h1>No hay Tipo de Salidas aun</h1>
        
        return tipo_salida.map((tipo_salida) => (
            <TpSalida tipo_salida={tipo_salida} key={tipo_salida.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tipos de Salidas
        </h1>
    {renderMain()}
    </div>
)
}
export default TpSalidaPage;