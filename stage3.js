"use strict";

// see https://twitter.com/7rulnik/status/996487052035346433

exports.__esModule = true;

var _babelPluginSyntaxTrailingFunctionCommas = require("babel-plugin-syntax-trailing-function-commas");

var _babelPluginSyntaxTrailingFunctionCommas2 = _interopRequireDefault(_babelPluginSyntaxTrailingFunctionCommas);

var _babelPluginTransformExponentiationOperator = require("babel-plugin-transform-exponentiation-operator");

var _babelPluginTransformExponentiationOperator2 = _interopRequireDefault(_babelPluginTransformExponentiationOperator);

var _babelPluginTransformObjectRestSpread = require("babel-plugin-transform-object-rest-spread");

var _babelPluginTransformObjectRestSpread2 = _interopRequireDefault(_babelPluginTransformObjectRestSpread);

var _babelPluginTransformAsyncGeneratorFunctions = require("babel-plugin-transform-async-generator-functions");

var _babelPluginTransformAsyncGeneratorFunctions2 = _interopRequireDefault(_babelPluginTransformAsyncGeneratorFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  plugins: [_babelPluginSyntaxTrailingFunctionCommas2.default, _babelPluginTransformExponentiationOperator2.default, _babelPluginTransformAsyncGeneratorFunctions2.default, _babelPluginTransformObjectRestSpread2.default]
};
module.exports = exports["default"];
