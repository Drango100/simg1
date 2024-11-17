import { createContext, useContext, useState } from 'react';
import {getUmedidasRequest,deleteUmedidaRequest,createUmedidaRequest, getUmedidaRequest, updateUmedidaRequest,  } from '../api/unidad.medida.js';

export const CategoryMedida = createContext();

export const useMedida = () => {
    const context = useContext(CategoryMedida);
    if (!context) {
        throw new Error("useMedida must be used within a CategoryMedidaProvider");
    }
    return context;
};

export const CategoryMedidaProvider = ({ children }) => {
    const [unidad_medida, setMedida] = useState([]);

    async function loadMedida() {
        const response = await getUmedidasRequest();
        setMedida(response.data);
    }

    const deleteMedida = async (id) => {
        try {
            const response = await deleteUmedidaRequest(id);
            setMedida(unidad_medida.filter(unidad_medida => unidad_medida.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createMedida = async (unidad_medida) => {
        try {
            const response = await createUmedidaRequest(unidad_medida);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getMedida = async (id) => {
        try {
            const response = await getUmedidaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateMedida = async (id, newFields) => {
        try {
            const response = await updateUmedidaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryMedida.Provider value={{unidad_medida,loadMedida,deleteMedida,createMedida,getMedida,updateMedida }}>
            {children}
        </CategoryMedida.Provider>
    );
};