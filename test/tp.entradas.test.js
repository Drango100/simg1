import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Tipo de entradas', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE tipo_entrada');
    await pool.query(`
    INSERT INTO tipo_entrada (cod_tipo_entrada, descri_tipo_entrada )
    VALUES ('TP1', 'Hola' );
`);
});

it('should get all Tipos de entradas', (done) => {
    chai.request(app)
    .get('/Tpenters')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Tipos de entradas by ID', (done) => {
    chai.request(app)
    .get('/Tpenter/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Tipos de entradas', (done) => {
    chai.request(app)
    .post('/Tpenter')
    .send({
        cod_tipo_entrada: 'S5',
        descri_tipo_entrada: 'hola',
        
        
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_tipo_entrada).to.equal('S5');
        done();
    });
});

it('should update an existing Tipo entrada', (done) => {
    chai.request(app)
    .put('/Tpenter/1')
    .send({ cod_tipo_entrada: 'S5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Tipo de entrada', (done) => {
    chai.request(app)
    .delete('/Tpenter/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
