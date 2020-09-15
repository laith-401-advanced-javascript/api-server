'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const categoriesRoute = require('../routes/categories.js');
const productsRoute = require('../routes/product.js');

const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const notFoundError = require('../middleware/404.js');
const serverError = require('../middleware/500.js');

const app = express();
app.use(express.json());
app.use(logger);
app.use(timestamp);
app.use(cors());
app.use(morgan('dev'));


app.use('/api/v1', categoriesRoute);
app.use('/api/v1', productsRoute);


/**
 * for the all category
 */
// let categoryArray = [];
// app.get('/api/v1/categories', (req, res) => {
//   let count = categoryArray.length;
//   let results = categoryArray;
//   res.json({ count, results });
// }); // end of api get categories 

// app.get('/api/v1/categories/:id', (req, res) => {
//   let id = req.params.id;
//   let record = categoryArray.filter(record => record.id === parseInt(id));
//   res.json(record);
// }); // end of api get categories by ID 

// app.post('/api/v1/categories', (req, res) => {
//   let { category, name, display_name, description } = req.body;
//   let record = { category, name, display_name, description };
//   record.id = categoryArray.length + 1;
//   categoryArray.push(record);
//   res.json(record);
// }); // end of api post categories 

// app.put('/api/v1/categories/:id', (req, res) => {
//   let idUpdate = req.params.id;
//   let { category, name, display_name, description, id } = req.body;
//   let recordUpdate = { category, name, display_name, description, id };
//   categoryArray = categoryArray.map((record) => (record.id === parseInt(idUpdate)) ? recordUpdate : record);
//   res.json(recordUpdate);
// }); // end of api put categories by ID 

// app.patch('/api/v1/categories/:id', (req, res) => {
//   let id = req.params.id;
//   let { category, name, display_name, description } = req.body;
//   let recordUpdate = { category, name, display_name, description, id };
//   categoryArray = categoryArray.map((record) => (record.id === parseInt(id)) ? recordUpdate : record);
//   res.json(recordUpdate);
// }); // end of api put categories by ID 

// app.delete('/api/v1/categories/:id', (req, res) => {
//   let idDelete = req.params.id;
//   categoryArray = categoryArray.filter(record => record.id !== parseInt(idDelete));
//   res.json({ message: '  Deleted' });
// }); // end of api delete categories by ID



app.get('/badrequest', () => {
    throw new Error('bad Request .... ');
});

app.use('*', notFoundError);
app.use(serverError);

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`lestining on ${PORT}`));

    },
};