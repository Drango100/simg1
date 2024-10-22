import axios from 'axios';

export const postlogins = async (usuario, password) => {
    try {
        const response = await axios.post('http://localhost:4000/logins', {
            usuario,   // Envía el nombre de usuario directamente
            password   // Envía la contraseña directamente
        },{
            withCredentials:true,
        });
        return response;
        //navigate("/")
    } catch (error) {
        console.error('Error en el login:', error.response ? error.response.data : error.message);
        throw error;
    }
};