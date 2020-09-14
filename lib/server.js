'use strict';

const express = require('express');
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const notFoundError = require('../middleware/404.js');
const serverError = require('../middleware/500.js');

const app = express();
app.use(express.json());
app.use(logger);
app.use(timestamp);

let productsArray = [];

/**
 * this rout using for getting all the products that i have posted and the number of them 
 * 
 */
app.get('/api/v1/products', (req, res) => {
    let count = productsArray.length;
    let results = productsArray;
    // res.json({ count, results });
    res.status(200).send({ count, results });

}); // end of api get Products 

/**
 * this rout using for getting  the products that i have posted and the number the selected id 
 * 
 */
app.get('/api/v1/products/:id', (req, res) => {
    let id = req.params.id;
    let record = productsArray.filter(record => record.id === parseInt(id));
    // res.json(record);
    res.status(200).send(record);

}); // end of api get Products by ID 

app.post('/api/v1/products', (req, res) => {
    let { category, name, display_name, description } = req.body;
    let record = { category, name, display_name, description };
    record.id = productsArray.length + 1;
    productsArray.push(record);
    // res.json(record);
    res.status(200).send(record);

}); // end of api post Products 

app.put('/api/v1/products/:id', (req, res) => {
    let idUpdate = req.params.id;
    let { category, name, display_name, description, id } = req.body;
    let recordUpdate = { category, name, display_name, description, id };
    productsArray = productsArray.map((record) => (record.id === parseInt(idUpdate)) ? recordUpdate : record);
    res.status(200).send(recordUpdate);

}); // end of api put Products by ID 


app.delete('/api/v1/products/:id', (req, res) => {
    let idDelete = req.params.id;
    productsArray = productsArray.filter(record => record.id !== parseInt(idDelete));
    // res.json({ message: '  Deleted' });
    res.status(200).send({ message: '  Deleted' });

}); // end of api delete Products by ID







/**
 * for the all category
 */
let categoryArray = [];
app.get('/api/v1/categories', (req, res) => {
    let count = categoryArray.length;
    let results = categoryArray;
    res.json({ count, results });
}); // end of api get categories 

app.get('/api/v1/categories/:id', (req, res) => {
    let id = req.params.id;
    let record = categoryArray.filter(record => record.id === parseInt(id));
    res.json(record);
}); // end of api get categories by ID 

app.post('/api/v1/categories', (req, res) => {
    let { category, name, display_name, description } = req.body;
    let record = { category, name, display_name, description };
    record.id = categoryArray.length + 1;
    categoryArray.push(record);
    res.json(record);
}); // end of api post categories 

app.put('/api/v1/categories/:id', (req, res) => {
    let idUpdate = req.params.id;
    let { category, name, display_name, description, id } = req.body;
    let recordUpdate = { category, name, display_name, description, id };
    categoryArray = categoryArray.map((record) => (record.id === parseInt(idUpdate)) ? recordUpdate : record);
    res.json(recordUpdate);
}); // end of api put categories by ID 

app.patch('/api/v1/categories/:id', (req, res) => {
    let id = req.params.id;
    let { category, name, display_name, description } = req.body;
    let recordUpdate = { category, name, display_name, description, id };
    categoryArray = categoryArray.map((record) => (record.id === parseInt(id)) ? recordUpdate : record);
    res.json(recordUpdate);
}); // end of api put categories by ID 

app.delete('/api/v1/categories/:id', (req, res) => {
    let idDelete = req.params.id;
    categoryArray = categoryArray.filter(record => record.id !== parseInt(idDelete));
    res.json({ message: '  Deleted' });
}); // end of api delete categories by ID



app.get('/badrequest', (req, res) => {
    throw new Error("bad Request .... ");
});

app.use('*', notFoundError);
app.use(serverError);

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`lestining on ${PORT}`));

    }
}