import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Clientes', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE cliente');
    await pool.query(`
    INSERT INTO cliente (cod_cliente, id_cliente, empre_cliente, nombre_cliente, apellido_cliente, dir_cliente, tel_cliente)
    VALUES ('c1', 001, 'solistica',002, 460, 'cra5', 3025162516);
    `);
});

it('should get all clientes', (done) => {
    chai.request(app)
    .get('/Clientes')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single cliente by ID', (done) => {
    chai.request(app)
    .get('/Cliente/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new cliente', (done) => {
    chai.request(app)
    .post('/Cliente')
    .send({
        cod_cliente: 'c5',
        id_cliente: 200,
        empre_cliente: 'Lanfasd',
        nombre_cliente: 'michelle',
        apellido_cliente: 'garzon',
        dir_cliente: 'cra5',
        tel_cliente: 3025162516
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_cliente).to.equal('c5');
        done();
    });
});

it('should update an existing cliente', (done) => {
    chai.request(app)
    .put('/Cliente/1')
    .send({ cod_cliente: 'C5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing cliente', (done) => {
    chai.request(app)
    .delete('/Cliente/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
