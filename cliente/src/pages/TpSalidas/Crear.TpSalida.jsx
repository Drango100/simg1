import { useEffect, useState } from 'react';
import { useTpSalida} from '../../contex/Tp.salida.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateTpSalida() {
    const { CreateTpSalida, getTpSalida, updateTpSalida } = useTpSalida();
    const [tipo_salida, setTpSalida] = useState({
        cod_tipo_salida: "",
        descr_tipo_salida: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTpSalida = async () => {
            if (params.id) {
                const tipo_salida = await getTpSalida(params.id);
                setTpSalida({
                    cod_tipo_salida: tipo_salida.cod_tipo_salida,
                    descr_tipo_salida: tipo_salida.descr_tipo_salida,
                });
            }
        };
        loadTpSalida();
    }, [params.id, getTpSalida]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Tipo Salida" : "New Tipo de Salida"}</h1>
            <Formik
                initialValues={tipo_salida}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateTpSalida(params.id, values);
                        navigate("/Tsalidas");
                    } else {
                        await CreateTpSalida(values);
                    }
                    setTpSalida({
                        cod_tipo_salida: "",
                        descr_tipo_salida: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_tipo_salida">
                                    <BootstrapForm.Label>Codigo de categoria</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_tipo_salida" 
                                        placeholder="Escribe el Tipo de Entrada" 
                                        onChange={handleChange} 
                                        value={values.cod_tipo_salida} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="descr_tipo_salida">
                                    <BootstrapForm.Label>Descripcion</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="descr_tipo_salida" 
                                        placeholder="Escribe la Descripcion" 
                                        onChange={handleChange} 
                                        value={values.descr_tipo_salida} 
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

export default CreateTpSalida;