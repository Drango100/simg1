import React, { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../api/registro.api';

function Register() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    return (
        <Container>
            <h1 className="text-center">Registro de Usuario</h1>
            <Formik
                initialValues={{ usuario: '', password: '' }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setMessage('');
                    try {
                        const response = await postRegister (values.usuario, values.password);
                        setMessage('Usuario creado Exitosament');
                        resetForm();
                        // navigate(''); si quiero que despues de registrarse valla a una pagina 
                    } catch (error) {
                        if (error.response && error.response.data) {
                            setMessage(error.response.data.message || 'Error en el registro.');
                        } else {
                            setMessage('Error en el servidor.');
                        }
                    }
                    setSubmitting(false);
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <FormikForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="usuario">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="usuario"
                                        placeholder="Ingresa tu nombre de usuario"
                                        onChange={handleChange}
                                        value={values.usuario}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-3">
                            {isSubmitting ? 'Registrando...' : 'Registrar'}
                        </Button>
                        {message && <div className="mt-3 alert alert-info">{message}</div>}
                    </FormikForm>
                )}
            </Formik>
        </Container>
    );
}

export default Register;
