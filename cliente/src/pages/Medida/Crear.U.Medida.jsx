import { useEffect, useState } from 'react';
import { useMedida} from '../../contex/U.Medida.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateMedida() {
    const { CreateMedida, getMedida, updateMedida } = useMedida();
    const [unidad_medida, setMedida] = useState({
        cod_unidad_medida: "",
        descr_medida: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadMedida = async () => {
            if (params.id) {
                const unidad_medida = await getMedida(params.id);
                setMedida({
                    cod_unidad_medida: unidad_medida.cod_unidad_medida,
                    descr_medida: unidad_medida.descr_medida,
                });
            }
        };
        loadMedida();
    }, [params.id, getMedida]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Unidad de Medida" : "New Unidad de medida"}</h1>
            <Formik
                initialValues={unidad_medida}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateMedida(params.id, values);
                        navigate("/Umedidas");
                    } else {
                        await CreateMedida(values);
                    }
                    setMedida({
                        cod_unidad_medida: "",
                        descr_medida: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_unidad_medida">
                                    <BootstrapForm.Label>Codigo de Unidad de Medida</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_unidad_medida" 
                                        placeholder="Escribe la Unidad de Medida" 
                                        onChange={handleChange} 
                                        value={values.cod_unidad_medida} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="descr_medida">
                                    <BootstrapForm.Label>Descripcion</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="descr_medida" 
                                        placeholder="Escribe la Descripcion" 
                                        onChange={handleChange} 
                                        value={values.descr_medida} 
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

export default CreateMedida;