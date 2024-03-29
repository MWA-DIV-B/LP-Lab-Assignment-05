"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Duplex", {
  enumerable: true,
  get: function () {
    return _duplex.Duplex;
  }
});
exports.PassThrough = void 0;
Object.defineProperty(exports, "Readable", {
  enumerable: true,
  get: function () {
    return _readable.Readable;
  }
});
exports.Stream = void 0;
Object.defineProperty(exports, "Transform", {
  enumerable: true,
  get: function () {
    return _transform.Transform;
  }
});
Object.defineProperty(exports, "Writable", {
  enumerable: true,
  get: function () {
    return _writable.Writable;
  }
});
exports.pipeline = exports.isReadable = exports.isErrored = exports.isDisturbed = exports.finished = exports.destroy = exports.default = exports.compose = exports.addAbortSignal = exports._uint8ArrayToBuffer = exports._isUint8Array = void 0;

var _proxy = _interopRequireDefault(require("../../mock/proxy.cjs"));

var _utils = require("../../_internal/utils.cjs");

var _readable = require("./readable.cjs");

var _writable = require("./writable.cjs");

var _duplex = require("./duplex.cjs");

var _transform = require("./transform.cjs");

var _index = _interopRequireDefault(require("./promises/index.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Stream = _proxy.default.__createMock__("Stream");

exports.Stream = Stream;

const PassThrough = _proxy.default.__createMock__("PassThrough");

exports.PassThrough = PassThrough;
const pipeline = (0, _utils.notImplemented)("stream.pipeline");
exports.pipeline = pipeline;
const finished = (0, _utils.notImplemented)("stream.finished");
exports.finished = finished;
const addAbortSignal = (0, _utils.notImplemented)("stream.addAbortSignal");
exports.addAbortSignal = addAbortSignal;
const isDisturbed = (0, _utils.notImplemented)("stream.isDisturbed");
exports.isDisturbed = isDisturbed;
const isReadable = (0, _utils.notImplemented)("stream.isReadable");
exports.isReadable = isReadable;
const compose = (0, _utils.notImplemented)("stream.compose");
exports.compose = compose;
const isErrored = (0, _utils.notImplemented)("stream.isErrored");
exports.isErrored = isErrored;
const destroy = (0, _utils.notImplemented)("stream.destroy");
exports.destroy = destroy;

const _isUint8Array = (0, _utils.notImplemented)("stream._isUint8Array");

exports._isUint8Array = _isUint8Array;

const _uint8ArrayToBuffer = (0, _utils.notImplemented)("stream._uint8ArrayToBuffer");

exports._uint8ArrayToBuffer = _uint8ArrayToBuffer;
var _default = {
  Readable: _readable.Readable,
  Writable: _writable.Writable,
  Duplex: _duplex.Duplex,
  Transform: _transform.Transform,
  Stream,
  PassThrough,
  pipeline,
  finished,
  addAbortSignal,
  promises: _index.default,
  isDisturbed,
  isReadable,
  compose,
  _uint8ArrayToBuffer,
  isErrored,
  destroy,
  _isUint8Array
};
module.exports = _default;