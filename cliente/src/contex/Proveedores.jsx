import { createContext, useContext, useState } from 'react';
import {getProveedoresRequest,deleteProveedorRequest,createProveedorRequest,getProveedorRequest,updateProveedorRequest } from '../api/proveedor.js';

export const ProveedorContext = createContext();

export const useProveedor = () => {
    const context = useContext(ProveedorContext);
    if (!context) {
        throw new Error("useProveedor must be used within a ProveedorContextProvider");
    }
    return context;
};

export const ProveedorContexProvider = ({ children }) => {
    const [proveedor, setProveedor] = useState([]);

    async function loadProveedores() {
        const response = await getProveedoresRequest();
        setProveedor(response.data);
    }

    const deleteProveedor = async (id) => {
        try {
            const response = await deleteProveedorRequest(id);
            setProveedor(proveedor.filter(proveedor => proveedor.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createProveedor = async (proveedor) => {
        try {
            const response = await createProveedorRequest(proveedor);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getProveedor = async (id) => {
        try {
            const response = await getProveedorRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateProveedor = async (id, newFields) => {
        try {
            const response = await updateProveedorRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <ProveedorContext.Provider value={{ proveedor, loadProveedores, deleteProveedor, createProveedor, getProveedor, updateProveedor }}>
            {children}
        </ProveedorContext.Provider>
    );
};
