import { useEffect } from 'react';
import Marca from '../../components/Marca.jsx';
import { useMarca } from '../../contex/Marca.jsx';


function MarcaPage() {
const {marca,loadMarca} = useMarca()
    

    useEffect(()=> {
        loadMarca()
    }, []);

    function renderMain(){
        if(marca.length === 0) return <h1>No hay Marca ingresados aun</h1>
        
        return marca.map((marca) => (
            <Marca marca={marca} key={marca.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de las Marcas
        </h1>
    {renderMain()}
    </div>
)
}
export default MarcaPage;