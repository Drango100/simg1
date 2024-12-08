import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Tipo de Salidas', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE tipo_salida');
    await pool.query(`
    INSERT INTO tipo_salida (cod_tipo_salida, descr_tipo_salida )
    VALUES ('TP1', 'Hola' );
`);
});

it('should get all Tipos de Salidas', (done) => {
    chai.request(app)
    .get('/Tsalidas')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Tipos de salidas by ID', (done) => {
    chai.request(app)
    .get('/Tsalida/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Tipos de salida', (done) => {
    chai.request(app)
    .post('/Tsalida')
    .send({
        cod_tipo_salida: 'S5',
        descr_tipo_salida: 'hola',
        
        
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_tipo_salida).to.equal('S5');
        done();
    });
});

it('should update an existing Tipo salida', (done) => {
    chai.request(app)
    .put('/Tsalida/1')
    .send({ cod_tipo_salida: 'S5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Tipo de salida', (done) => {
    chai.request(app)
    .delete('/Tsalida/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
