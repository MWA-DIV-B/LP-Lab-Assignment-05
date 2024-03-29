"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.json = exports.default = exports.buffer = exports.blob = exports.arrayBuffer = void 0;

var _utils = require("../../../_internal/utils.cjs");

const arrayBuffer = (0, _utils.notImplemented)("stream.consumers.arrayBuffer");
exports.arrayBuffer = arrayBuffer;
const blob = (0, _utils.notImplemented)("stream.consumers.blob");
exports.blob = blob;
const buffer = (0, _utils.notImplemented)("stream.consumers.buffer");
exports.buffer = buffer;
const text = (0, _utils.notImplemented)("stream.consumers.text");
exports.text = text;
const json = (0, _utils.notImplemented)("stream.consumers.json");
exports.json = json;
var _default = {
  arrayBuffer,
  blob,
  buffer,
  text,
  json
};
module.exports = _default;