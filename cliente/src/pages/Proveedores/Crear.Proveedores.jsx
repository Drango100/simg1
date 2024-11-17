import { useEffect, useState } from 'react';
import { useProveedor } from '../../contex/Proveedores.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateProveedor() {
    const { createProveedor, getProveedor, updateProveedor } = useProveedor();
    const [proveedor, setProveedor] = useState({
        cod_proveedor: "",
        id_proveedor: "",
        empre_proveedor: "",
        nombre_proveedor: "",
        ape_proveedor: "",
        dir_proveedor: "",
        tel_proveedor: "",
        correo_proveedor: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadProveedores = async () => {
            if (params.id) {
                const proveedor = await getProveedor(params.id);
                setProveedor({
                    cod_proveedor: proveedor.cod_proveedor,
                    id_proveedor: proveedor.id_proveedor,
                    empre_proveedor: proveedor.empre_proveedor,
                    nombre_proveedor: proveedor.nombre_proveedor,
                    ape_proveedor: proveedor.ape_proveedor,
                    dir_proveedor: proveedor.dir_proveedor,
                    tel_proveedor: proveedor.tel_proveedor,
                    correo_proveedor: proveedor.correo_proveedor,
                });
            }
        };
        loadProveedores();
    }, [params.id, getProveedor]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Proveedor" : "New Proveedor"}</h1>
            <Formik
                initialValues={proveedor}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateProveedor(params.id, values);
                        navigate("/Proveedores");
                    } else {
                        await createProveedor(values);
                    }
                    setProveedor({
                        cod_proveedor: "",
                        id_proveedor: "",
                        empre_proveedor: "",
                        nombre_proveedor: "",
                        ape_proveedor: "",
                        dir_proveedor: "",
                        tel_proveedor: "",
                        correo_proveedor: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_proveedor">
                                    <BootstrapForm.Label>Codigo del Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_proveedor" 
                                        placeholder="Escribe el nombre" 
                                        onChange={handleChange} 
                                        value={values.cod_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="id_proveedor">
                                    <BootstrapForm.Label>Id del Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="id_proveedor" 
                                        placeholder="Escribe la cantidad" 
                                        onChange={handleChange} 
                                        value={values.id_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="can_minima">
                                    <BootstrapForm.Label>Cantidad Mínima</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="can_minima"
                                        placeholder="Escribe la cantidad minima"  
                                        onChange={handleChange} 
                                        value={values.can_minima} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="empre_proveedor">
                                    <BootstrapForm.Label>Empresa del Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="empre_proveedor"
                                        placeholder="Escribe el valor del producto" 
                                        onChange={handleChange} 
                                        value={values.empre_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="nombre_proveedor">
                                    <BootstrapForm.Label>Nombre del Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="nombre_proveedor" 
                                        placeholder="Escribe el valor del iva" 
                                        onChange={handleChange} 
                                        value={values.nombre_proveedor}
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="ape_proveedor">
                                    <BootstrapForm.Label>Apellido del Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="ape_proveedor"
                                        placeholder="Escribe el Apellido del Proveedor" 
                                        onChange={handleChange} 
                                        value={values.ape_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="dir_proveedor">
                                    <BootstrapForm.Label>Direccion de Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="dir_proveedor"
                                        placeholder="Escribe la Direccion del proveedor" 
                                        onChange={handleChange} 
                                        value={values.dir_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="dir_proveedor">
                                    <BootstrapForm.Label>Direccion de Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="dir_proveedor"
                                        placeholder="Escribe la Direccion del proveedor" 
                                        onChange={handleChange} 
                                        value={values.dir_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="tel_proveedor">
                                    <BootstrapForm.Label>Telefono del Proveedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="tel_proveedor"
                                        placeholder="Escribe el telefono del proveedor" 
                                        onChange={handleChange} 
                                        value={values.tel_proveedor} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="correo_proveedor">
                                    <BootstrapForm.Label>Escribe el Correo del Provedor</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="correo_proveedor"
                                        placeholder="Escribe el Correo del proveedor" 
                                        onChange={handleChange} 
                                        value={values.correo_proveedor} 
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

export default CreateProveedor;

