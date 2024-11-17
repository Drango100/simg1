import { useEffect, useState } from 'react';
import { useCliente } from '../../contex/Clientes.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateCliente() {
    const { createCliente, getCliente, updateCliente } = useCliente();
    const [cliente, setCliente] = useState({
        cod_cliente: "",
        id_cliente: "",
        empre_cliente: "",
        nombre_cliente: "",
        apellido_cliente: "",
        dir_cliente: "",
        tel_cliente: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadClientes = async () => {
            if (params.id) {
                const cliente = await getCliente(params.id);
                setCliente({
                    cod_cliente: cliente.cod_cliente,
                    id_cliente: cliente.id_cliente,
                    empre_cliente: cliente.empre_cliente,
                    nombre_cliente: cliente.nombre_cliente,
                    apellido_cliente: cliente.apellido_cliente,
                    dir_cliente: cliente.dir_cliente,
                    tel_cliente: cliente.tel_cliente,
                });
            }
        };
        loadClientes();
    }, [params.id, getCliente]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Cliente" : "New Cliente"}</h1>
            <Formik
                initialValues={cliente}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateCliente(params.id, values);
                        navigate("/Clientes");
                    } else {
                        await createCliente(values);
                    }
                    setCliente({
                        cod_cliente: "",
                        id_cliente: "",
                        empre_cliente: "",
                        nombre_cliente: "",
                        apellido_cliente: "",
                        dir_cliente: "",
                        tel_cliente: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_cliente">
                                    <BootstrapForm.Label>Codigo del Cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_cliente" 
                                        placeholder="Escribe el nombre" 
                                        onChange={handleChange} 
                                        value={values.cod_cliente} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="id_cliente">
                                    <BootstrapForm.Label>ID del Cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="id_cliente" 
                                        placeholder="Escribe el Id del Cliente" 
                                        onChange={handleChange} 
                                        value={values.id_cliente} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="empre_cliente">
                                    <BootstrapForm.Label>Empresa del Cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="empre_cliente"
                                        placeholder="Escribe la Empresa del Cliente"  
                                        onChange={handleChange} 
                                        value={values.empre_cliente} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="nombre_cliente">
                                    <BootstrapForm.Label>Nombre del Cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="nombre_cliente"
                                        placeholder="Escribe el Nombre del Cliente" 
                                        onChange={handleChange} 
                                        value={values.nombre_cliente} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="apellido_cliente">
                                    <BootstrapForm.Label>Apellido del Cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="apellido_cliente" 
                                        placeholder="Escribe el Apellido" 
                                        onChange={handleChange} 
                                        value={values.apellido_cliente} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="dir_cliente">
                                    <BootstrapForm.Label>Direccion del Cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="dir_cliente"
                                        placeholder="Escribe la Direccion del Cliente" 
                                        onChange={handleChange} 
                                        value={values.dir_cliente} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="tel_cliente">
                                    <BootstrapForm.Label>Telefono del cliente</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="tel_cliente"
                                        placeholder="Escribe el Telefono del cliente" 
                                        onChange={handleChange} 
                                        value={values.tel_cliente} 
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

export default CreateCliente;
