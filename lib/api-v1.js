'use strict';

const express = require('express');
const router = express.Router();

const products = require('../lib/models/products/products.collection.js');

const categories = require('../lib/models/categories/categories.collection.js');


router.get('/api/v1/:model', handleGetAllItems);
router.get('/api/v1/:model/:id', handleGetAllItems);
router.post('/api/v1/:model', handleAllPost);
router.put('/api/v1/:model/:id', handlePutItem);
router.patch('/api/v1/:model/:id', handlePatchItem);
router.delete('/api/v1/:model/:id', handleDeleteItem);

router.param('model', getModel);

function getModel(req, res, next) {
  let model = req.params.model;
  switch (model) {
  case 'products':
    req.model = products;
    next();
    break;
  case 'categories':
    req.model = categories;
    next();
    break;
  default:
    next('Invalid Model!!! ');
    break;
  }

}
/**
 * this rout using for getting all the categories and products  
 * 
 */
function handleGetAllItems(req, res, next) {
  console.log('req.model >>>>> ', req.model);
  req.model.get(req.params.id).then(results => {
    res.status(200).send(results);

  }).catch(next);
}
/**
 * this rout using for post to categories and products 
 * 
 */
function handleAllPost(req, res, next) {
  req.model.create(req.body).then(result => {
    res.json(result);
  }).catch(next);
}
/**
 * this wrout to put and edit the data of ane of products and categories
 * 
 */

function handlePutItem(req, res, next) {
  req.model.update(req.params.id, req.body).then(result => {
    res.json(result);
  }).catch(next);
}
/**
 * this wrout to patch and edit the data of ane of products and categories
 * 
 */

function handlePatchItem(req, res, next) {
  req.model.update(req.params.id, req.body).then(result => {
    res.json(result);
  }).catch(next);
}

/**
 * this rout for delete a item 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function handleDeleteItem(req, res, next) {
  req.model.delete(req.params.id, req.body).then(result => {
    res.json(result);
  }).catch(next);
}





module.exports = router;