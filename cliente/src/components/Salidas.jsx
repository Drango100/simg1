import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategorySalida } from '../contex/Salidas.Contex.jsx';
import {Button,Table} from'react-bootstrap';

const Salida = ({ salida }) => {
    const { deleteSalida } = useContext(CategorySalida);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteSalida(salida.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Salida/${salida.id}`);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Codigo de Salida</th>
                    <th>Fecha de Salida</th>
                    <th>Factura de Salida</th>
                    <th>Hora de Salida</th>
                    <th>Guia de Trasporte</th>
                    <th>Empresa de Trasporte</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{salida.cod_salida}</td>
                    <td>{salida.fech_salida}</td>
                    <td>{salida.factura_salida}</td>
                    <td>{salida.hora_salida}</td>
                    <td>{salida.guia_trasporte}</td>
                    <td>{salida.empre_trasporte}</td>
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
export default Salida;