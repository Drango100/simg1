import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryCliente } from '../contex/Clientes.jsx';
import {Button,Table} from'react-bootstrap';

const Cliente = ({ cliente }) => {
    const { deleteCliente } = useContext(CategoryCliente);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteCliente(cliente.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Cliente/${cliente.id}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo del Cliente</th>
                    <th>ID del Cliente</th>
                    <th>Empresa del Cliente</th>
                    <th>Nombre del Cliente</th>
                    <th>Apellido del Cliente</th>
                    <th>Direccion del Cliente</th>
                    <th>Telefono del Cliente</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{cliente.cod_cliente}</td>
                    <td>{cliente.id_cliente}</td>
                    <td>{cliente.empre_cliente}</td>
                    <td>{cliente.nombre_cliente}</td>
                    <td>{cliente.apellido_cliente}</td>
                    <td>{cliente.dir_cliente}</td>
                    <td>{cliente.tel_cliente}</td>
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
export default Cliente;
