import { useEffect, useState } from 'react';
import { useProducto } from '../../contex/ProductContext.jsx';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form as BootstrapForm } from 'react-bootstrap';

function CreateProduct() {
    const { createProducto, getProduct, updateProduct } = useProducto();
    const [producto, setProduct] = useState({
        nombre_producto: "",
        can_maxima: "",
        can_minima: "",
        valor_producto: "",
        iva_producto: "",
        descu_producto: "",
        ubi_producto: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadProductos = async () => {
            if (params.id) {
                const producto = await getProduct(params.id);
                setProduct({
                    nombre_producto: producto.nombre_producto,
                    can_maxima: producto.can_maxima,
                    can_minima: producto.can_minima,
                    valor_producto: producto.valor_producto,
                    iva_producto: producto.iva_producto,
                    descu_producto: producto.descu_producto,
                    ubi_producto: producto.ubi_producto,
                });
            }
        };
        loadProductos();
    }, [params.id, getProduct]);

    return (
        <Container>
            <h1 className='titulo text-center'>{params.id ? "Edit the Product" : "New Product"}</h1>
            <Formik
                initialValues={producto}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateProduct(params.id, values);
                        navigate("/Productos");
                    } else {
                        await createProducto(values);
                    }
                    setProduct({
                        nombre_producto: "",
                        can_maxima: "",
                        can_minima: "",
                        valor_producto: "",
                        iva_producto: "",
                        descu_producto: "",
                        ubi_producto: "",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <BootstrapForm onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="nombre_producto">
                                    <BootstrapForm.Label>Nombre del Producto</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="nombre_producto" 
                                        placeholder="Escribe el nombre" 
                                        onChange={handleChange} 
                                        value={values.nombre_producto} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="can_maxima">
                                    <BootstrapForm.Label>Cantidad Máxima</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="can_maxima" 
                                        placeholder="Escribe la cantidad" 
                                        onChange={handleChange} 
                                        value={values.can_maxima} 
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
                                <BootstrapForm.Group controlId="valor_producto">
                                    <BootstrapForm.Label>Valor del Producto</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="valor_producto"
                                        placeholder="Escribe el valor del producto" 
                                        onChange={handleChange} 
                                        value={values.valor_producto} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="iva_producto">
                                    <BootstrapForm.Label>IVA</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="iva_producto" 
                                        placeholder="Escribe el valor del iva" 
                                        onChange={handleChange} 
                                        value={values.iva_producto} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                            <Col>
                                <BootstrapForm.Group controlId="descu_producto">
                                    <BootstrapForm.Label>Descuento</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="descu_producto"
                                        placeholder="Escribe el descuento" 
                                        onChange={handleChange} 
                                        value={values.descu_producto} 
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <BootstrapForm.Group controlId="ubi_producto">
                                    <BootstrapForm.Label>Ubicación del Producto</BootstrapForm.Label>
                                    <BootstrapForm.Control 
                                        type="text" 
                                        name="ubi_producto"
                                        placeholder="Escribe la ubicacion" 
                                        onChange={handleChange} 
                                        value={values.ubi_producto} 
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

export default CreateProduct;

