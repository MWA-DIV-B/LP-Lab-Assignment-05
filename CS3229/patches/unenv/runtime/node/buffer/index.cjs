"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blob = void 0;
Object.defineProperty(exports, "Buffer", {
  enumerable: true,
  get: function () {
    return _buffer.Buffer;
  }
});
Object.defineProperty(exports, "INSPECT_MAX_BYTES", {
  enumerable: true,
  get: function () {
    return _buffer.INSPECT_MAX_BYTES;
  }
});
Object.defineProperty(exports, "SlowBuffer", {
  enumerable: true,
  get: function () {
    return _buffer.SlowBuffer;
  }
});
module.exports = exports.constants = exports.btoa = exports.atob = void 0;
Object.defineProperty(exports, "kMaxLength", {
  enumerable: true,
  get: function () {
    return _buffer.kMaxLength;
  }
});
exports.transcode = exports.resolveObjectURL = exports.kStringMaxLength = void 0;

var _utils = require("../../_internal/utils.cjs");

var _buffer = require("./_buffer.cjs");

const Blob = globalThis.Blob;
exports.Blob = Blob;
const resolveObjectURL = (0, _utils.notImplemented)("buffer.resolveObjectURL");
exports.resolveObjectURL = resolveObjectURL;
const transcode = (0, _utils.notImplemented)("buffer.transcode");
exports.transcode = transcode;
const btoa = global.btoa;
exports.btoa = btoa;
const atob = globalThis.atob;
exports.atob = atob;
const kStringMaxLength = 0;
exports.kStringMaxLength = kStringMaxLength;
const constants = {
  MAX_LENGTH: _buffer.kMaxLength,
  MAX_STRING_LENGTH: kStringMaxLength
};
exports.constants = constants;
var _default = {
  Buffer: _buffer.Buffer,
  SlowBuffer: _buffer.SlowBuffer,
  kMaxLength: _buffer.kMaxLength,
  INSPECT_MAX_BYTES: _buffer.INSPECT_MAX_BYTES,
  Blob,
  resolveObjectURL,
  transcode,
  btoa,
  atob,
  kStringMaxLength,
  constants
};
module.exports = _default;