'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceChainPromises;

var _ramda = require('ramda');

function reduceChainPromises(promises) {
  return (0, _ramda.reduce)(function (ret, next) {
    return ret.then(function (value) {
      return next;
    });
  }, Promise.resolve())(promises);
}