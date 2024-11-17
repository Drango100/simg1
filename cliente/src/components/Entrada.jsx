import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryEntrada } from '../contex/Entradas.jsx';
import {Button,Table} from'react-bootstrap';

const Entrada = ({ entrada }) => {
    const { deleteEntrada } = useContext(CategoryEntrada);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteEntrada(entrada.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Entrada/${entrada.id}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo de Entrada</th>
                    <th>Fecha de Entrada</th>
                    <th>Orden Compra</th>
                    <th>Hora de Entrada</th>
                    <th>Factura</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{entrada.cod_entrada}</td>
                    <td>{entrada.fech_entrada}</td>
                    <td>{entrada.orden_compra}</td>
                    <td>{entrada.hora_entrada}</td>
                    <td>{entrada.factura}</td>
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
export default Entrada;
