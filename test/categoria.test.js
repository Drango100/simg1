import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Categorias', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE categoria');
    await pool.query(`
    INSERT INTO categoria (nombre_categoria, cod_categoria)
    VALUES ('Salas', 01);
    `);
});

it('should get all Categorias', (done) => {
    chai.request(app)
    .get('/Categorias')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Categoria by ID', (done) => {
    chai.request(app)
    .get('/Categoria/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new cliente', (done) => {
    chai.request(app)
    .post('/Categoria')
    .send({
        nombre_categoria: 'c5',
        cod_categoria: 20,
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.nombre_categoria).to.equal('c5');
        done();
    });
});

it('should update an existing Categoria', (done) => {
    chai.request(app)
    .put('/Categoria/1')
    .send({ nombre_categoria: 'C5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Categoria', (done) => {
    chai.request(app)
    .delete('/Categoria/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
