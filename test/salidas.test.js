import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Salidas', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE salida');
    await pool.query(`
    INSERT INTO salida (cod_salida, fech_salida, factura_salida, hora_salida, guia_trasporte, empre_trasporte )
    VALUES ('S1', '1-01-25', 98675,'09:00', 334654, 'solistica' );
`);
});

it('should get all Salidas', (done) => {
    chai.request(app)
    .get('/Salidas')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Salidas by ID', (done) => {
    chai.request(app)
    .get('/Salida/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Salidas', (done) => {
    chai.request(app)
    .post('/Salida')
    .send({
        cod_salida: 'S5',
        fech_salida: '1-01-25',
        factura_salida: 456476,
        hora_salida: '09:00',
        guia_trasporte: 7876768,
        empre_trasporte:'solistica'
        
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_salida).to.equal('S5');
        done();
    });
});

it('should update an existing Salidas', (done) => {
    chai.request(app)
    .put('/Salida/1')
    .send({ cod_salida: 'S6' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Salida', (done) => {
    chai.request(app)
    .delete('/Salida/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
