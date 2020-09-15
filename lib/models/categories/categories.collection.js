'use strict';
const schema = require('./categories.schema.js');
const Model = require('../mongo-model.js');

class Categories extends Model {
  constructor() {
    super(schema);
  }

}

module.exports = new Categories();