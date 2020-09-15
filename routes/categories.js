'use strict';

const express = require('express');

const categories = require('../lib/models/categories/categories.collection.js');
const router = express.Router();


router.get('/categories', getCategories);
router.get('/categories/:id', getCategories);
router.post('/categories', postCategories);
router.put('/categories/:id', putCategories);
router.delete('/categories/:id', deleteCategories);
router.patch('/categories/:id', patchCategories);

/**
 * this rout using for getting all the categories that i have posted and the number of them 
 * 
 */
function getCategories(req, res, next) {
    const id = req.params.id;
    categories.get(id).then(data => {
        res.status(200).send(data);
    }).catch(next)
} // end of api get categories 

/**
 * this rout using for getting  the categories that i have posted and the number the selected id 
 * 
 */
function postCategories(req, res, next) {
    console.log('req.body >>>>>> ', req.body);
    categories.create(req.body).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        console.log(err);
        next(err);
    })
} // end of api post categories 

function putCategories(req, res, next) {
    const id = req.params.id;
    categories.update(id, req.body).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        console.log(err);
        next(err);
    })
} // end of api put categories by ID 

function deleteCategories(req, res, next) {
    let idDelete = req.params.id;
    categories.delete(idDelete).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        console.log(err);
        next(err);
    })
} // end of api delete categories by ID

function patchCategories(req, res, next) {
    const id = req.params.id;
    categories.update(id, req.body).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        console.log(err);
        next(err);
    })
} // end of api patch categories by ID 


module.exports = router;