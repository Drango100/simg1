import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CategoryMedida}  from '../contex/U.Medida.jsx';
import {Button,Table} from'react-bootstrap';

const Medida = ({ unidad_medida }) => {
    const { deleteMedida } = useContext(CategoryMedida);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteMedida(unidad_medida.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Umedida/${unidad_medida.id}`);
    };
    return (
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>COD Unidad de Medida</th>
                    <th>Descricion de Medida</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{unidad_medida.cod_unidad_medida}</td>
                    <td>{unidad_medida.descr_medida}</td>
                    <td>
                        <Button variant="danger" onClick={handleDelete} className="me-2">
                            Borrar
                        </Button>
                        <Button variant="primary" onClick={handleEdit}>
                            Editar
                        </Button>
                        
                    </td>
                </tr>
            </tbody>

        </Table>
        
    );
};
export default Medida;