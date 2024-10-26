import { useEffect } from 'react';
import ProductCart from '../../components/Category.jsx';
import {useCategory} from '../../contex/Category.contex.jsx';


function CategoryPage() {
const {categoria,loadCategory} = useCategory()
    

    useEffect(()=> {
        loadCategory()
    }, []);

    function renderMain(){
        if(categoria.length === 0) return <h1>No hay categorias ingresados aun</h1>
        
        return categoria.map((categoria) => (
            <ProductCart categoria={categoria} key={categoria.id} />
        ))
}
return (
    <div className='container'>
        <h1 className='titulo text-center'>
            Tabla de categorias
        </h1>
    {renderMain()}
    </div>
)
}
export default CategoryPage;
