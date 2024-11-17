import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CategoryTpSalida}  from '../contex/Tp.salida.jsx';
import {Button,Table} from'react-bootstrap';

const TpSalida = ({ tipo_salida }) => {
    const { deleteTpSalida } = useContext(CategoryTpSalida);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteTpSalida(tipo_salida.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Tsalida/${tipo_salida.id}`);
    };
    return (
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>COD Tipo de Salida</th>
                    <th>Descricion de Tipo de Salida</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{tipo_salida.cod_tipo_salida}</td>
                    <td>{tipo_salida.descr_tipo_salida}</td>
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
export default TpSalida;
