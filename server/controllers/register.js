import { pool } from '../db/dblogin.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    console.log('Solicitud de registro recibida');
    
    const { usuario, password } = req.body; // Asegúrate de que los datos se envíen correctamente
    console.log('Datos recibidos para registro:', req.body);

    // Validaciones simples
    if (!usuario || !password) {
        return res.status(400).json({ message: 'Usuario y contraseña son requeridos.' });
    }

    // Verificar si el usuario ya existe
    const consult = 'SELECT * FROM usuarios WHERE usuario = ?';
    try {
        const [existingUser] = await pool.query(consult, [usuario]);
        
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe.' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Insertar nuevo usuario en la base de datos
        const insertQuery = 'INSERT INTO usuarios (usuario, password) VALUES (?, ?)';
        await pool.query(insertQuery, [usuario, hashedPassword]);

        console.log('Usuario registrado exitosamente:', usuario);
        return res.status(201).json({ message: 'Registro exitoso.' });

    } catch (error) {
        console.error('Error en el registro:', error.message);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
};