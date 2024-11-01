import { useEffect, useState } from 'react';
import { useCategory } from '../../contex/Category.contex.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateCategory() {
    const { createCategory, getCategory, updateCategory } = useCategory();
    const [categoria, setCategory] = useState({
        cod_categoria: "",
        nombre_categoria: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadCategory = async () => {
            if (params.id) {
                const categoria = await getCategory(params.id);
                setCategory({
                    cod_categoria: categoria.cod_categoria,
                    nombre_categoria: categoria.nombre_categoria,
                });
            }
        };
        loadCategory();
    }, [params.id, getCategory]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Category" : "New Category"}</h1>
            <Formik
                initialValues={categoria}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateCategory(params.id, values);
                        navigate("/new/Category");
                    } else {
                        await createCategory(values);
                    }
                    setCategory({
                        cod_categoria: "",
                        nombre_categoria: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="cod_categoria">
                                    <BootstrapForm.Label>Codigo de categoria</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="cod_categoria" 
                                        placeholder="Escribe el codigo de la categoria" 
                                        onChange={handleChange} 
                                        value={values.cod_categoria} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="nombre_categoria">
                                    <BootstrapForm.Label>Nombre de la categoria</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="nombre_categoria" 
                                        placeholder="Escribe el nombre de la categoria" 
                                        onChange={handleChange} 
                                        value={values.nombre_categoria} 
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

export default CreateCategory;
