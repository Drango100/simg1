import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Marcas', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE marca');
    await pool.query(`
    INSERT INTO marca (cod_marca, nombre_marca)
    VALUES ('M1','Puma');
`);
});

it('should get all Marcas', (done) => {
    chai.request(app)
    .get('/Marcas')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Marca by ID', (done) => {
    chai.request(app)
    .get('/Marca/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Marca', (done) => {
    chai.request(app)
    .post('/Marca')
    .send({
        cod_marca: 'M5',
        nombre_marca: 'Puma',
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_marca).to.equal('M5');
        done();
    });
});

it('should update an existing Marca', (done) => {
    chai.request(app)
    .put('/Marca/1')
    .send({ cod_marca: 'M5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Marca', (done) => {
    chai.request(app)
    .delete('/Marca/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
