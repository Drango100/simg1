import axios from 'axios';


export const postRegister = async (usuario, password) => {
    try {
        const response = await axios.post('http://localhost:4000/registro', {
            usuario,   // Envía el nombre de usuario directamente
            password   // Envía la contraseña directamente
        });
        console.log('registro exitoso', response.data);
    } catch (error) {
        console.error('Error en el registro :', error.response ? error.response.data : error.message);
    }
};