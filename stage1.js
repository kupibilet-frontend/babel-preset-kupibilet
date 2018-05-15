"use strict";

// see https://twitter.com/7rulnik/status/996487052035346433

exports.__esModule = true;

var _babelPresetStage = require("./stage2");

var _babelPresetStage2 = _interopRequireDefault(_babelPresetStage);

var _babelPluginTransformClassConstructorCall = require("babel-plugin-transform-class-constructor-call");

var _babelPluginTransformClassConstructorCall2 = _interopRequireDefault(_babelPluginTransformClassConstructorCall);

var _babelPluginTransformExportExtensions = require("babel-plugin-transform-export-extensions");

var _babelPluginTransformExportExtensions2 = _interopRequireDefault(_babelPluginTransformExportExtensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  presets: [_babelPresetStage2.default],
  plugins: [_babelPluginTransformClassConstructorCall2.default, _babelPluginTransformExportExtensions2.default]
};
module.exports = exports["default"];
