import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CategoryContext}  from '../contex/Category.contex.jsx';
import {Button,Table} from'react-bootstrap';

const Category = ({ categoria }) => {
    const { deleteCategory } = useContext(CategoryContext);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteCategory(categoria.id);
    };

    const handleEdit = () => {
        navigate(`/edit/${categoria.id}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo de categoria</th>
                    <th>Nombre de categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{categoria.cod_categoria}</td>
                    <td>{categoria.nombre_categoria}</td>
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
export default Category;
