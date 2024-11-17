import { useEffect, useState } from 'react';
import { useTpEntrada } from '../../contex/tp.entrada.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateTpEntrada() {
    const { createTpEntrada, getTpEntrada, updateTpEntrada } = useTpEntrada();
    const [tipo_entrada, setTpEntrada] = useState({
        cod_tipo_entrada: "",
        descri_tipo_entrada: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTpEntrada = async () => {
            if (params.id) {
                const tipo_entrada = await getTpEntrada(params.id);
                setTpEntrada({
                    cod_tipo_entrada: tipo_entrada.cod_tipo_entrada,
                    descri_tipo_entrada: tipo_entrada.descri_tipo_entrada,
                });
            }
        };
        loadTpEntrada();
    }, [params.id, getTpEntrada]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Tipo Entrada" : "New Tipo de Entrada"}</h1>
            <Formik
                initialValues={tipo_entrada}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateTpEntrada(params.id, values);
                        navigate("/Tpenters");
                    } else {
                        await createTpEntrada(values);
                    }
                    setTpEntrada({
                        cod_tipo_entrada: "",
                        descri_tipo_entrada: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_tipo_entrada">
                                    <BootstrapForm.Label>Codigo de categoria</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_tipo_entrada" 
                                        placeholder="Escribe l Tipo de Entrada" 
                                        onChange={handleChange} 
                                        value={values.cod_tipo_entrada} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="descri_tipo_entrada">
                                    <BootstrapForm.Label>Descripcion</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="descri_tipo_entrada" 
                                        placeholder="Escribe la Descripcion" 
                                        onChange={handleChange} 
                                        value={values.descri_tipo_entrada} 
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

export default CreateTpEntrada;
