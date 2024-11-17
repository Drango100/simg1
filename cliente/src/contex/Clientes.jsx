import { createContext, useContext, useState } from 'react';
import { getClientesRequest, deleteClienteRequest, createClienteRequest, getClienteRequest, updateClienteRequest } from '../api/cliente.js';

export const CategoryCliente = createContext();

export const useCliente = () => {
    const context = useContext(CategoryCliente);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryClienteProvider");
    }
    return context;
};

export const CategoryClienteProvider = ({ children }) => {
    const [cliente, setCliente] = useState([]);

    async function loadCliente() {
        const response = await getClientesRequest();
        setCliente(response.data);
    }

    const deleteCliente = async (id) => {
        try {
            const response = await deleteClienteRequest(id);
            setCliente(cliente.filter(cliente => cliente.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createCliente = async (cliente) => {
        try {
            const response = await createClienteRequest(cliente);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getCliente = async (id) => {
        try {
            const response = await getClienteRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateCliente = async (id, newFields) => {
        try {
            const response = await updateClienteRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <CategoryCliente.Provider value={{ cliente, loadCliente, deleteCliente, createCliente, getCliente, updateCliente }}>
            {children}
        </CategoryCliente.Provider>
    );
};