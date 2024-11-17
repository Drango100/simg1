import { useEffect, useState } from 'react';
import { useSalida } from '../../contex/Salidas.Contex.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateSalida() {
    const { createSalida, getSalida, updateSalida } = useSalida();
    const [salida, setSalida] = useState({
        cod_salida: "",
        fech_salida: "",
        factura_salida: "",
        hora_salida: "",
        guia_trasporte: "",
        empre_trasporte: "",
        });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadSalida = async () => {
            if (params.id) {
                const salida = await getSalida(params.id);
                setSalida({
                    cod_salida: salida.cod_salida,
                    fech_salida: salida.fech_salida,
                    factura_salida: salida.factura_salida,
                    hora_salida: salida.hora_salida,
                    guia_trasporte: salida.guia_trasporte,
                    empre_trasporte: salida.empre_trasporte,
                    
                    
                });
            }
        };
        loadSalida();
    }, [params.id, getSalida]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Salida" : "New Salida"}</h1>
            <Formik
                initialValues={salida}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateSalida(params.id, values);
                        navigate("/Salidas");
                    } else {
                        await createSalida(values);
                    }
                    setSalida({
                        cod_salida: "",
                        fech_salida: "",
                        factura_salida: "",
                        hora_salida: "",
                        guia_trasporte: "",
                        empre_trasporte: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_salida">
                                    <BootstrapForm.Label>Codigo de la Entrada</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_salida" 
                                        placeholder="Escribe el Codigo" 
                                        onChange={handleChange} 
                                        value={values.cod_salida} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="fech_salida">
                                    <BootstrapForm.Label>Escribe la Fecha</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="fech_salida" 
                                        placeholder="Escribe la Fecha" 
                                        onChange={handleChange} 
                                        value={values.fech_salida} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="factura_salida">
                                    <BootstrapForm.Label>Factura</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="factura_salida"
                                        placeholder="Escribe el numero de factura"  
                                        onChange={handleChange} 
                                        value={values.factura_salida} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="hora_salida">
                                    <BootstrapForm.Label>Hora de salida</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="hora_salida"
                                        placeholder="Escribe la hora de salida" 
                                        onChange={handleChange} 
                                        value={values.hora_salida} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="guia_trasporte">
                                    <BootstrapForm.Label>Escribe la guia</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="guia_trasporte" 
                                        placeholder="Escribe la Guia" 
                                        onChange={handleChange} 
                                        value={values.guia_trasporte} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="empre_trasporte">
                                    <BootstrapForm.Label>Empresa de Trasporte</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="empre_trasporte" 
                                        placeholder="Escribe la empresa de Trasporte" 
                                        onChange={handleChange} 
                                        value={values.empre_trasporte} 
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

export default CreateSalida;