import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CategoryTpEntrada}  from '../contex/tp.entrada.jsx';
import {Button,Table} from'react-bootstrap';

const TpEntrada = ({ tipo_entrada }) => {
    const { deleteTpEntrada } = useContext(CategoryTpEntrada);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteTpEntrada(tipo_entrada.id);
    };

    const handleEdit = () => {
        navigate(`/edit/Tpenter/${tipo_entrada.id}`);
    };
    return (
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>COD Tipo de Entarda</th>
                    <th>Descricion de Tipo de Entrada</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{tipo_entrada.cod_tipo_entrada}</td>
                    <td>{tipo_entrada.descri_tipo_entrada}</td>
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
export default TpEntrada;
