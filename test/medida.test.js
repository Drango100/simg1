import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Unidad de medida', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE unida_medida');
    await pool.query(`
    INSERT INTO unida_medida (cod_unidad_medida, descr_medida )
    VALUES ('TP1', 'Hola' );
`);
});

it('should get all Unidad de medida', (done) => {
    chai.request(app)
    .get('/Umedidas')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Unidad de medida by ID', (done) => {
    chai.request(app)
    .get('/Umedida/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Unidad de medida', (done) => {
    chai.request(app)
    .post('/Umedida')
    .send({
        cod_unidad_medida: 'S5',
        descr_medida: 'hola',
        
        
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_unidad_medida).to.equal('S5');
        done();
    });
});

it('should update an existing Unidad medida', (done) => {
    chai.request(app)
    .put('/Umedida/1')
    .send({ cod_unidad_medida: 'S5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Unidad medida', (done) => {
    chai.request(app)
    .delete('/Umedida/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
