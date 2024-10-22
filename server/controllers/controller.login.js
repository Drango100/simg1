import { pool } from '../db/dblogin.js'; // Importa la conexión a la base de datos
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Para cifrar y comparar contraseñas

// Definir una clave secreta para firmar el JWT directamente en el código
const JWT_SECRET = '1234';  // Puedes cambiarla por cualquier clave que quieras usar

export const Login = async (req, res) => {
    console.log('Solicitud recibida en /logins');  
    console.log('Método de la solicitud:', req.method);  
    console.log('Cuerpo de la solicitud:', req.body);  

    const { usuario, password } = req.body;  // Aquí ya no habrá problemas de desestructuración

    console.log('Usuario recibido:', usuario);  
    console.log('Password recibido:', password);  

    const consult = 'SELECT * FROM usuarios WHERE usuario = ?';  

    try {
        console.log('Ejecutando consulta en la base de datos...');  
        const [result] = await pool.query(consult, [usuario]);
        console.log('Resultado de la consulta:', result);  

        if (result.length > 0) {
            const user = result[0];
            console.log('Usuario encontrado:', user);  

            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log('Comparación de contraseñas:', passwordMatch);  

            if (passwordMatch) {
                console.log('Contraseña correcta, generando token...');  
                const token = jwt.sign({ usuario: user.usuario}, JWT_SECRET, { expiresIn: '1h' });
                console.log('Token generado:', token);  

                // Configurar la cookie con el token
                res.cookie('jwt', token);

                // Responder con éxito
                res.status(200).json({ message: 'Autenticación exitosa' });
            } else {
                console.log('Contraseña incorrecta');  
                return res.status(401).json({ message: 'Usuario o contraseña incorrecta' });
            }
        } else {
            console.log('Usuario no encontrado en la base de datos');  
            return res.status(401).json({ message: 'Usuario o contraseña incorrecta' });
        }
    } catch (error) {
        console.error('Error en la consulta SQL:', error.message);  
        return res.status(500).json({ error: 'Error en el servidor' });
    }
};




