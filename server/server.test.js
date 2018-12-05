const request = require("supertest");
const expect = require('expect.js');

let app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should GET /', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res).to.have.property('body');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.be('Page not found.');
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should GET /users', (done) => {
            request(app)
                .get('/users')
                .expect((res) => {
                    expect(res.body.length).to.be.greaterThan(0);
                    expect(res.body[0]).to.have.property('name');
                    expect(res.body[0]).to.have.property('age');
                })
                .end(done);
        });
    });
});

