import { useEffect, useState } from 'react';
import { useViwe } from '../../contex/Presentacio.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateViwe() {
    const { createViwe, getViwe, updateViwe } = useViwe();
    const [presentacion, setViwe] = useState({
        cod_presentacion: "",
        nombre_prentacion: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadViwe = async () => {
            if (params.id) {
                const presentacion = await getViwe(params.id);
                setViwe({
                    cod_presentacion: presentacion.cod_presentacion,
                    nombre_prentacion: presentacion.nombre_prentacion,
                });
            }
        };
        loadViwe();
    }, [params.id, getViwe]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Presentacion" : "New Presentacion"}</h1>
            <Formik
                initialValues={presentacion}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateViwe(params.id, values);
                        navigate("/Viwe");
                    } else {
                        await createViwe(values);
                    }
                    setViwe({
                        cod_presentacion: "",
                        nombre_prentacion: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_presentacion">
                                    <BootstrapForm.Label>Codigo de Presentacion</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_presentacion" 
                                        placeholder="Escribe el codigo de la Presentacion" 
                                        onChange={handleChange} 
                                        value={values.cod_presentacion} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="nombre_prentacion">
                                    <BootstrapForm.Label>Nombre de la Presentacion</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="nombre_prentacion" 
                                        placeholder="Escribe el nombre de la Presentacion" 
                                        onChange={handleChange} 
                                        value={values.nombre_prentacion} 
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

export default CreateViwe;
