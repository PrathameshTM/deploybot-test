const app = require('../lib/loader');
const request = require('supertest');

describe('test the /v1 path', () => {
  test('/v1', done => {
    return request(app)
    .get("/v1")
    .expect(200)
    .end(done);
  });

  test('/v1/health-check', done => {
    return request(app)
    .get("/v1/health-check")
    .expect(200)
    .expect('Content-Length', '30')
    .end(done);
  });

  test('/v1/index', done => {
    return request(app)
    .get("/v1/index")
    .expect(200)
    .end(done);
  });
});