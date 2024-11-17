import { useEffect } from 'react';
import TpEntrada from '../../components/Tp.Entarda.jsx';
import { useTpEntrada } from '../../contex/tp.entrada.jsx';


function TpEntradaPage() {
const {tipo_entrada,loadTpEntrada} = useTpEntrada()
    

    useEffect(()=> {
        loadTpEntrada()
    }, []);

    function renderMain(){
        if(tipo_entrada.length === 0) return <h1>No hay Tipos ingresados aun</h1>
        
        return tipo_entrada.map((tipo_entrada) => (
            <TpEntrada tipo_entrada={tipo_entrada} key={tipo_entrada.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tipos de Entradas
        </h1>
    {renderMain()}
    </div>
)
}
export default TpEntradaPage;