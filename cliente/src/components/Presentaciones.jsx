import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button,Table} from'react-bootstrap';
import { CategoryViwe } from '../contex/Presentacio.jsx';

const Viwe = ({ presentacion }) => {
    const { deleteViwe } = useContext(CategoryViwe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteViwe(presentacion.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Viwe/${presentacion.id}`);
    };
    return (
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo de Presentacion</th>
                    <th>Nombre de la Presentacion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{presentacion.cod_presentacion}</td>
                    <td>{presentacion.nombre_presentacion}</td>
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
export default Viwe;
