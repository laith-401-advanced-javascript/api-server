'use strict';
const express = require('express');

const products = require('../lib/models/products/products.collection.js');
const router = express.Router();

router.get('/products', getProduct);
router.get('/products/:id', getProduct);
router.post('/products', postProduct);
router.put('/products/:id', putProduct);
router.delete('/products/:id', deleteProduct);
router.patch('/products/:id', patchProduct);

/**
 * this rout using for getting all the products that i have posted and the number of them 
 * 
 */
function getProduct(req, res, next) {
  const id = req.params.id;
  products.get(id).then(data => {
    res.status(200).send(data);
  }).catch(next);
} // end of api get Products 

/**
 * this rout using for getting  the products that i have posted and the number the selected id 
 * 
 */
function postProduct(req, res, next) {
  console.log('req.body >>>>>> ', req.body);
  products.create(req.body).then(data => {
    res.status(200).send(data);
  }).catch(err => {
    console.log(err);
    next(err);
  });
} // end of api post Products 

function putProduct(req, res, next) {
  const id = req.params.id;
  products.update(id, req.body).then(data => {
    res.status(200).send(data);
  }).catch(err => {
    console.log(err);
    next(err);
  });
} // end of api put Products by ID 

function deleteProduct(req, res, next) {
  let idDelete = req.params.id;
  products.delete(idDelete).then(data => {
    res.status(200).send(data);
  }).catch(err => {
    console.log(err);
    next(err);
  });
} // end of api delete Products by ID

function patchProduct(req, res, next) {
  const id = req.params.id;
  products.update(id, req.body).then(data => {
    res.status(200).send(data);
  }).catch(err => {
    console.log(err);
    next(err);
  });
} // end of api patch Products by ID 


module.exports = router;