import express from 'express';
import cors from 'cors';
import { PORT } from './db/config.js';
import indexRoutes from './routes/crud/index.routes.js';
import taskRoutes from './routes/crud/tasks.routes.js';
import loginRoutes from './routes/login/rout.login.js';
import register  from './routes/registro/router.register.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(cors({origin:['http://localhost:5173','http://192.168.1.6:5173'],credentials: true,
    methods: 'GET,POST,DELETE,PUT',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token',}));//que sino quiere que le entre peticiones de otra url toca especificar la ip del froend y si son mas ip tienen que ser decalradar dentro de una array[].
app.use(express.json());

//rutas y modelos 
app.use(indexRoutes);
app.use(taskRoutes);
app.use(loginRoutes);
app.use(register);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
