'use strict';
const { server } = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {


  it('should respond with 500 for bad routes', () => {
    return mockRequest.get('/badrequest').then(result => {
      expect(result.status).toBe(500);
    }).catch(err => {
      console.log(err);
    });
  });

});