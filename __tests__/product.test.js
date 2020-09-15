'use strict';
require('@code-fellows/supergoose');

const products = require('../lib/models/products/products.collection.js');

describe('product model', () => {
    it('it can create()', async() => {
        const productObj = { category: 'electronic', name: 'computer', display_name: 'laptop', description: 'lap' };
        const result = await products.create(productObj);
        Object.keys(productObj).forEach(key => {
            expect(result[key]).toEqual(productObj[key]);
        });
    });

    it('it can get()', async() => {
        const productObj = { category: 'food', name: 'chips', display_name: 'cheetos', description: 'chips' };
        const result = await products.create(productObj);
        const record = await products.get(result._id);
        Object.keys(productObj).forEach(key => {
            expect(record[0][key]).toEqual(productObj[key]);
        });
    });

    it('it can update()', async() => {
        const productObj = { category: 'drink', name: 'monster', display_name: 'black', description: 'drink' };
        const newUpdate = { category: 'cleaning', name: 'new monster', display_name: 'black', description: 'drink' };

        const result = await products.create(productObj);
        await products.update(result._id, newUpdate);
        const data = await products.get(result._id);
        Object.keys(productObj).forEach(key => {
            expect(data[0][key]).toEqual(newUpdate[key]);
        });
    });

    it('it can delete()', async() => {
        const productObj = { category: 'tv', name: 'new tv', display_name: 'black', description: 'electronic' };

        const result = await products.create(productObj);
        const record = await products.delete(result._id);
        Object.keys(productObj).forEach(key => {
            expect(record[key]).toEqual(productObj[key]);
        });
    });

});