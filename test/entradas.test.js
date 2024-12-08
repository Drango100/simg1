import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Entradas', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE entrada');
    await pool.query(`
    INSERT INTO entrada (cod_entrada, fech_entrada, orden_compra, hora_entrada, factura)
    VALUES ('E1','20-12-24', 009,'10:00',5678);
    `);
});

it('should get all Entradas', (done) => {
    chai.request(app)
    .get('/Entradas')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Entrada by ID', (done) => {
    chai.request(app)
    .get('/Entrada/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Entrada', (done) => {
    chai.request(app)
    .post('/Entrada')
    .send({
        cod_entrada: 'c5',
        fech_entrada: '20-12-24',
        orden_compra: 9,
        hora_entrada: '5:54',
        factura: 54657
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_entrada).to.equal('c5');
        done();
    });
});

it('should update an existing Entrada', (done) => {
    chai.request(app)
    .put('/Entrada/1')
    .send({ cod_entrada: 'E5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Entrada', (done) => {
    chai.request(app)
    .delete('/Entrada/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
