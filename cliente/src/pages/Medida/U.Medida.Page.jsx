import { useEffect } from 'react';
import Medida from '../../components/U.Medida.jsx';
import { useMedida} from '../../contex/U.Medida.jsx';


function MedidaPage() {
const {unidad_medida,loadMedida} = useMedida()
    

    useEffect(()=> {
        loadMedida()
    }, []);

    function renderMain(){
        if(unidad_medida.length === 0) return <h1>No hay unidad de Medida aun</h1>
        
        return unidad_medida.map((unidad_medida) => (
            <Medida unidad_medida={unidad_medida} key={unidad_medida.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tablas de medidas
        </h1>
    {renderMain()}
    </div>
)
}
export default MedidaPage;