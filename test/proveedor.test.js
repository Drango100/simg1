import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('Proveedor', () => {
beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE proveedor');
    await pool.query(`
    INSERT INTO proveedor (cod_proveedor, id_proveedor, empre_proveedor, nombre_proveedor, ape_proveedor, dir_proveedor, tel_proveedor, correo_proveedor )
    VALUES ('PV1', 1, 'Puma','miguel', 'garzon', 'cra5', 3025162516, 'cocogarzon100@gmail.com' );
`);
});

it('should get all Proveedor', (done) => {
    chai.request(app)
    .get('/Proveedores')
    .end((err, res) => {
        expect(res).to.have.status(200);
        
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
    });
});

it('should get a single Proveedor by ID', (done) => {
    chai.request(app)
    .get('/Proveedor/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
    });
});

it('should create a new Proveedor', (done) => {
    chai.request(app)
    .post('/Proveedor')
    .send({
        cod_proveedor: 'PV5',
        id_proveedor: 2,
        empre_proveedor: 'ADIDAS',
        nombre_proveedor: 'Miguel',
        ape_proveedor:'Garzon',
        dir_proveedor:'cr4',
        tel_proveedor: 302515467,
        correo_provedor:'momo@gmail.com'
        
    })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.cod_proveedor).to.equal('PV5');
        done();
    });
});

it('should update an existing Proveedor', (done) => {
    chai.request(app)
    .put('/Proveedor/1')
    .send({ cod_proveedor: 'PV5' })
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});

it('should delete an existing Proveedor', (done) => {
    chai.request(app)
    .delete('/Proveedor/1')
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
    });
});
});
