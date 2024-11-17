import { useEffect } from 'react';
import Entrada from '../../components/Entrada.jsx';
import {useEntrada} from '../../contex/Entradas.jsx';


function EntradaPage() {
const {entrada,loadEntrada} = useEntrada()
    

    useEffect(()=> {
        loadEntrada()
    }, []);

    function renderMain(){
        if(!entrada || entrada.length === 0) return <h1>No hay Entradas ingresadas aun</h1>
        
        return entrada.map((entrada) => (
            <Entrada entrada={entrada} key={entrada.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de Entradas
        </h1>
        <div>
        <button className='Crear'>Crear un Entrada</button>
        </div>
    {renderMain()}
    </div>
)
}
export default EntradaPage;
