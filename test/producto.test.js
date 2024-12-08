import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';
import app from '../server/index.js'; // Asegúrate de importar tu aplicación Express
import { pool } from '../server/db/db.js'; // Ajuste de la ruta

chai.use(chaiHttp);


describe('productos', () => {
  beforeEach(async () => {
    // Configuración de la base de datos antes de cada prueba
    await pool.query('TRUNCATE TABLE producto');
    await pool.query(`
      INSERT INTO producto (nombre_producto, can_maxima, can_minima, valor_producto, iva_producto, descu_producto, ubi_producto)
      VALUES ('Producto 1', 100, 10, 1500, 19, 10, 'Ubicación 1');
    `);
  });

  it('should get all tasks', (done) => {
    chai.request(app)
      .get('/Productos')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        done();
      });
  });

  it('should get a single task by ID', (done) => {
    chai.request(app)
      .get('/Producto/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
      });
  });

  it('should create a new task', (done) => {
    chai.request(app)
      .post('/Producto')
      .send({
        nombre_producto: 'Producto 2',
        can_maxima: 200,
        can_minima: 20,
        valor_producto: 3000,
        iva_producto: 19,
        descu_producto: 15,
        ubi_producto: 'Ubicación 2'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.nombre_producto).to.equal('Producto 2');
        done();
      });
  });

  it('should update an existing task', (done) => {
    chai.request(app)
      .put('/Producto/1')
      .send({ nombre_producto: 'Producto Actualizado' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
      });
  });

  it('should delete an existing task', (done) => {
    chai.request(app)
      .delete('/Producto/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.affectedRows).to.equal(1);
        done();
      });
  });
});
