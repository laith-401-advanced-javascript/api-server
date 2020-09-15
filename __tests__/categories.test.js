'use strict';
require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection.js');

describe('categorie model', () => {
  it('it can create()', async() => {
    const categorieObj = { name: 'computer', display_name: 'laptop', description: 'lap' };
    const result = await categories.create(categorieObj);
    Object.keys(categorieObj).forEach(key => {
      expect(result[key]).toEqual(categorieObj[key]);
    });
  });

  it('it can get()', async() => {
    const categorieObj = { name: 'chips', display_name: 'cheetos', description: 'chips' };
    const result = await categories.create(categorieObj);
    const record = await categories.get(result._id);
    Object.keys(categorieObj).forEach(key => {
      expect(record[0][key]).toEqual(categorieObj[key]);
    });
  });

  it('it can update()', async() => {
    const categorieObj = { name: 'monster', display_name: 'black', description: 'drink' };
    const newUpdate = { name: 'new monster', display_name: 'black', description: 'drink' };

    const result = await categories.create(categorieObj);
    await categories.update(result._id, newUpdate);
    const data = await categories.get(result._id);
    Object.keys(categorieObj).forEach(key => {
      expect(data[0][key]).toEqual(newUpdate[key]);
    });
  });

  it('it can delete()', async() => {
    const categorieObj = { name: 'new tv', display_name: 'black', description: 'electronic' };

    const result = await categories.create(categorieObj);
    const record = await categories.delete(result._id);
    Object.keys(categorieObj).forEach(key => {
      expect(record[key]).toEqual(categorieObj[key]);
    });
  });

});