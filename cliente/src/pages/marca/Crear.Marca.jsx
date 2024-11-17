import { useEffect, useState } from 'react';
import { useMarca } from '../../contex/Marca.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateMarca() {
    const { createMarca, getMarca, updateMarca } = useMarca();
    const [marca, setMarca] = useState({
        cod_marca: "",
        nombre_marca: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadMarca = async () => {
            if (params.id) {
                const marca = await getMarca(params.id);
                setMarca({
                    cod_marca: marca.cod_marca,
                    nombre_marca: marca.nombre_marca,
                });
            }
        };
        loadMarca();
    }, [params.id, getMarca]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Marca" : "New Marca"}</h1>
            <Formik
                initialValues={marca}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateMarca(params.id, values);
                        navigate("/Marca");
                    } else {
                        await createMarca(values);
                    }
                    setMarca({
                        cod_marca: "",
                        nombre_marca: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_marca">
                                    <BootstrapForm.Label>Codigo de categoria</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_marca" 
                                        placeholder="Escribe el codigo de la Marca" 
                                        onChange={handleChange} 
                                        value={values.cod_marca} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="nombre_marca">
                                    <BootstrapForm.Label>Nombre de la Marca</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="nombre_marca" 
                                        placeholder="Escribe el nombre de la Marca" 
                                        onChange={handleChange} 
                                        value={values.nombre_marca} 
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

export default CreateMarca;
