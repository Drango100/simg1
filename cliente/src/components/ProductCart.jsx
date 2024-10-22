import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../contex/ProductContext';
import {Button,Table} from'react-bootstrap';

const ProductCart = ({ producto }) => {
    const { deleteProducto } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteProducto(producto.id);
    };

    const handleEdit = () => {
        navigate(`/edit/${producto.id}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre del Producto</th>
                    <th>Cantidad Máxima</th>
                    <th>Cantidad Mínima</th>
                    <th>Descuento</th>
                    <th>Ubicación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{producto.nombre_producto}</td>
                    <td>{producto.can_maxima}</td>
                    <td>{producto.can_minima}</td>
                    <td>{producto.descu_producto}</td>
                    <td>{producto.ubi_producto}</td>
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
export default ProductCart;
