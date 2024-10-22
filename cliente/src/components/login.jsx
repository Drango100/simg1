import React, { useState } from 'react';
import './css/login.css';
import { postlogins } from '../api/login.api'; // Importa la función para hacer la solicitud
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            const response = await postlogins( usuario, password,navigate );
            if (response.status===200 ) {
                localStorage.setItem('token', response.data.token);
                navigate("/");
            }else {setError('login fallido')};
        } catch (err) {
            setError('Usuario o contraseña incorrecta ');
        }
        
    };
    const handleSignUp = async (e) => {
        navigate ("/register")
    }

    return (
        
        <div className='container'>
            <h2 className='text-center'>INICIO DE SESION</h2>
            <Form> 
                
                <Form.Group id='Username'>
                    <From-label className='usuario'>Usuario</From-label>
                    <Form.Control type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </Form.Group>
                
                <Form.Group id='password'>
                    <From-label className='password'>Contraseña</From-label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
                <Button  onClick={handleSubmit}>Login</Button>
                {error && <p>{error}</p>}
                <Button type="submit" onClick={handleSignUp}>Registrate</Button>
                
            </Form>
        </div>
        
    );
};

export default Login;
