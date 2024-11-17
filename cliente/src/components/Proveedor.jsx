import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProveedorContext } from '../contex/Proveedores.jsx';
import {Button,Table} from'react-bootstrap';

const Proveedor = ({ proveedor }) => {
    const { deleteProveedor } = useContext(ProveedorContext);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteProveedor(proveedor.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Proveedor${proveedor.id}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo de Proveedor</th>
                    <th>Id de proveedor</th>
                    <th>Empresa del Proveedor</th>
                    <th>Nombre del Proveedor</th>
                    <th>Apellido del Proveedor</th>
                    <th>Direccion del Proveedor</th>
                    <th>Telefono del Proveedor</th>
                    <th>Correo del Proveedor</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{proveedor.cod_proveedor}</td>
                    <td>{proveedor.id_proveedor}</td>
                    <td>{proveedor.nombre_proveedor}</td>
                    <td>{proveedor.ape_proveedor}</td>
                    <td>{proveedor.dir_proveedor}</td>
                    <td>{proveedor.tel_proveedor}</td>
                    <td>{proveedor.correo_proveedor}</td>
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
export default Proveedor;
