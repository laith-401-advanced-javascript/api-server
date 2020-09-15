'use strict';

const schema = require('./products.schema');
const Model = require('../mongo-model');

class Products extends Model {
    constructor() {
        super(schema);
    }

}

module.exports = new Products();