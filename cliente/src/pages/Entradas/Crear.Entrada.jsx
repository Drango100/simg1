import { useEffect, useState } from 'react';
import { useEntrada } from '../../contex/Entradas.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateEntrada() {
    const { createEntrada, getEntrada, updateEntrada } = useEntrada();
    const [entrada, setEntrada] = useState({
        cod_entrada: "",
        fech_entrada: "",
        orden_compra: "",
        hora_entrada: "",
        factura: "",
        });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadEntrada = async () => {
            if (params.id) {
                const entrada = await getEntrada(params.id);
                setEntrada({
                    cod_entrada: entrada.cod_entrada,
                    fech_entrada: entrada.fech_entrada,
                    orden_compra: entrada.orden_compra,
                    hora_entrada: entrada.hora_entrada,
                    factura: entrada.factura,
                    
                });
            }
        };
        loadEntrada();
    }, [params.id, getEntrada]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Entrada" : "New Entrada"}</h1>
            <Formik
                initialValues={entrada}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateEntrada(params.id, values);
                        navigate("/Entradas");
                    } else {
                        await createEntrada(values);
                    }
                    setEntrada({
                        cod_entrada: "",
                        fech_entrada: "",
                        orden_compra: "",
                        hora_entrada: "",
                        factura: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_entrada">
                                    <BootstrapForm.Label>Codigo de la Entrada</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_entrada" 
                                        placeholder="Escribe el Codigo" 
                                        onChange={handleChange} 
                                        value={values.cod_entrada} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="fech_entrada">
                                    <BootstrapForm.Label>Escribe la Fecha</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="fech_entrada" 
                                        placeholder="Escribe la Fecha" 
                                        onChange={handleChange} 
                                        value={values.fech_entrada} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="orden_compra">
                                    <BootstrapForm.Label>Orden de Compra</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="orden_compra"
                                        placeholder="Escribe la Orden de Compra"  
                                        onChange={handleChange} 
                                        value={values.orden_compra} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="hora_entrada">
                                    <BootstrapForm.Label>Hora de la Entrada</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="hora_entrada"
                                        placeholder="Escribe la Hora del Ingreso" 
                                        onChange={handleChange} 
                                        value={values.hora_entrada} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="factura">
                                    <BootstrapForm.Label>Factura del Ingreso</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="factura" 
                                        placeholder="Escribe el Apellido" 
                                        onChange={handleChange} 
                                        value={values.factura} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-3">
                            {isSubmitting ? "Guardando..." : "Guardar"}
                        </Button>
                    </BootstrapForm>
                )}
            </Formik>
        </Container>
    );
}

export default CreateEntrada;
