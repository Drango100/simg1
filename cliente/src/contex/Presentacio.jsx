import { createContext, useContext, useState } from 'react';
import { getViwesRequest,createViweRequest,deleteViweRequest,getViweRequest,updateViweRequest } from '../api/presentacion.js';

export const CategoryViwe = createContext();

export const useViwe = () => {
    const context = useContext(CategoryViwe);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryViweProvider");
    }
    return context;
};

export const CategoryViweProvider = ({ children }) => {
    const [presentacion, setViwe] = useState([]);

    async function loadViwe() {
        const response = await getViwesRequest();
        setViwe(response.data);
    }

    const deleteView = async (id) => {
        try {
            const response = await deleteViweRequest(id);
            setViwe(marca.filter(presentacion => presentacion.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createViwe = async (presentacion) => {
        try {
            const response = await createViweRequest(presentacion);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getViwe = async (id) => {
        try {
            const response = await getViweRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateView = async (id, newFields) => {
        try {
            const response = await updateViweRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryViwe.Provider value={{presentacion,loadViwe,deleteView,createViwe,getViwe,updateView }}>
            {children}
        </CategoryViwe.Provider>
    );
};