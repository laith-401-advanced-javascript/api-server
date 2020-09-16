'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// const categoriesRoute = require('../routes/categories.js');
// const productsRoute = require('../routes/product.js');
// const timestamp = require('../middleware/timestamp.js');
// const logger = require('../middleware/logger.js');
const notFoundError = require('../middleware/404.js');
const serverError = require('../middleware/500.js');

const apiV1Router = require('../lib/api-v1.js');


const app = express();
app.use(express.json());
// app.use(logger);
// app.use(timestamp);
app.use(cors());
app.use(morgan('dev'));

app.use(apiV1Router);


// app.use('/api/v1', categoriesRoute);
// app.use('/api/v1', productsRoute);



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