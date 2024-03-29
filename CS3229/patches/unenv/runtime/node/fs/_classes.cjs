"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WriteStream = exports.Stats = exports.ReadStream = exports.FileWriteStream = exports.FileReadStream = exports.Dirent = exports.Dir = void 0;

var _proxy = _interopRequireDefault(require("../../mock/proxy.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Dir = _proxy.default.__createMock__("fs.Dir");

exports.Dir = Dir;

const Dirent = _proxy.default.__createMock__("fs.Dirent");

exports.Dirent = Dirent;

const Stats = _proxy.default.__createMock__("fs.Stats");

exports.Stats = Stats;

const ReadStream = _proxy.default.__createMock__("fs.ReadStream");

exports.ReadStream = ReadStream;

const WriteStream = _proxy.default.__createMock__("fs.WriteStream");

exports.WriteStream = WriteStream;

const FileReadStream = _proxy.default.__createMock__("fs.FileReadStream");

exports.FileReadStream = FileReadStream;

const FileWriteStream = _proxy.default.__createMock__("fs.FileWriteStream");

exports.FileWriteStream = FileWriteStream;