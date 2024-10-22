import { createContext, useContext, useState } from 'react';
import { getProductRequest, deleteTaskRequest, createProductRequest, getProductsRequest, updateProductRequest } from '../api/producto.api';

export const ProductContext = createContext();

export const useProducto = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducto must be used within a ProductContextProvider");
    }
    return context;
};

export const ProductContexProvider = ({ children }) => {
    const [producto, setProducto] = useState([]);

    async function loadProductos() {
        const response = await getProductRequest();
        setProducto(response.data);
    }

    const deleteProducto = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            setProducto(producto.filter(producto => producto.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createProducto = async (producto) => {
        try {
            const response = await createProductRequest(producto);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getProduct = async (id) => {
        try {
            const response = await getProductsRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateProduct = async (id, newFields) => {
        try {
            const response = await updateProductRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProductContext.Provider value={{ producto, loadProductos, deleteProducto, createProducto, getProduct, updateProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
