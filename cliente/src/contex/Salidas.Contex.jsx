import { createContext, useContext, useState } from 'react';
import {getSalidasRequest,updateSalidaRequest,createSalidaRequest,getSalidaRequest,} from '../api/salidas.js';

export const CategorySalida = createContext();

export const useSalida = () => {
    const context = useContext(CategorySalida);
    if (!context) {
        throw new Error("useCategory must be used within a CategorySalidaProvider");
    }
    return context;
};

export const CategorySalidaProvider = ({ children }) => {
    const [salida, setSalida] = useState([]);

    async function loadSalida() {
        const response = await getSalidasRequest();
        setSalida(response.data);
    }

    const deleteSalida = async (id) => {
        try {
            const response = await updateSalidaRequest(id);
            setSalida(salida.filter(salida => salida.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createSalida = async (salida) => {
        try {
            const response = await createSalidaRequest(salida);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getSalida = async (id) => {
        try {
            const response = await getSalidaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateSalida = async (id, newFields) => {
        try {
            const response = await updateSalidaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <CategorySalida.Provider value={{ salida,loadSalida,deleteSalida,createSalida,getSalida,updateSalida }}>
            {children}
        </CategorySalida.Provider>
    );
};