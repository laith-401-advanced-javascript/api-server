'use strict';

module.exports = (req, res, next) => {
    const date = new Date();
    req.requestTime = date.toUTCString();
    console.log(req.requestTime)
    next();
};