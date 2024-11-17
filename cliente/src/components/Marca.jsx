import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CategoryMarca}  from '../contex/Marca.jsx';
import {Button,Table} from'react-bootstrap';

const Marca = ({ marca }) => {
    const { deleteMarca } = useContext(CategoryMarca);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteMarca(marca.id);
    };

    const handleEdit = () => {
        navigate(`/edit/marca/${marca.id}`);
    };
    return (
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo de Marca</th>
                    <th>Nombre de la Marca</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{marca.cod_marca}</td>
                    <td>{marca.nombre_marca}</td>
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
export default Marca;
