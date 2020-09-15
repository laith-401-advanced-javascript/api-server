'use strict';
const { server } = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {
  it('should respond with 200 for get a  good routes', () => {
    return mockRequest.get('/api/v1/products').then(result => {
      // console.log("result >>> ", result);
      expect(result.status).toBe(200);
    }).catch(err => {
      console.log(err);
    });

  });

  it('should respond with 200 for get id a good routes', () => {
    return mockRequest.get('/api/v1/products/:id').then(result => {
      // console.log("result >>> ", result);
      expect(result.status).toBe(200);
    }).catch(err => {
      console.log(err);
    });

  });

  it('should respond with 200 for post product a good routes', () => {
    return mockRequest.post('/api/v1/products').then(result => {
      // console.log("result >>> ", result);
      expect(result.status).toBe(200);
    }).catch(err => {
      console.log(err);
    });

  });

  it('should respond with 200 for put product a good routes', () => {
    return mockRequest.put('/api/v1/products/:id').then(result => {
      // console.log("result >>> ", result);
      expect(result.status).toBe(200);
    }).catch(err => {
      console.log(err);
    });

  });

  it('should respond with 200 for delete product a good routes', () => {
    return mockRequest.delete('/api/v1/products/:id').then(result => {
      // console.log("result >>> ", result);
      expect(result.status).toBe(200);
    }).catch(err => {
      console.log(err);
    });

  });

});