import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Presentacion', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE presentacion');
    await pool.query(`
    INSERT INTO presentacion (cod_presentacion, nombre_presentacion)
    VALUES ('P1','Caja');
`);
});

it('should get all Presentacion', (done) => {
    chai.request(app)
    .get('/Presentaciones')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Presentacion by ID', (done) => {
    chai.request(app)
    .get('/Presentacion/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Presentacion', (done) => {
    chai.request(app)
    .post('/Presentacion')
    .send({
        cod_presentacion: 'P5',
        nombre_presentacion: 'Sabana',
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_presentacion).to.equal('P5');
        done();
    });
});

it('should update an existing Presentacion', (done) => {
    chai.request(app)
    .put('/Presentacion/1')
    .send({ cod_presentacion: 'P5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Presentacion', (done) => {
    chai.request(app)
    .delete('/Presentacion/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
