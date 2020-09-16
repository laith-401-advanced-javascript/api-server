'use strict';
const { server } = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {


  it('should respond with 404 for not found routes', () => {
    return mockRequest.get('/anyroot').then(result => {
      expect(result.status).toBe(404);
    }).catch(err => {
      console.log(err);
    });
  });


});