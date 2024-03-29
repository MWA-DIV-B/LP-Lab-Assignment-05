"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chown = exports.chmod = exports.appendFile = exports.access = void 0;
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function () {
    return _constants.constants;
  }
});
exports.writeFile = exports.watch = exports.utimes = exports.unlink = exports.truncate = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.realpath = exports.readlink = exports.readdir = exports.readFile = exports.opendir = exports.open = exports.mkdtemp = exports.mkdir = exports.lutimes = exports.lstat = exports.link = exports.lchown = exports.lchmod = exports.cp = exports.copyFile = void 0;

var _utils = require("../../../_internal/utils.cjs");

var _constants = require("../_constants.cjs");

const access = (0, _utils.notImplemented)("fs.access");
exports.access = access;
const copyFile = (0, _utils.notImplemented)("fs.copyFile");
exports.copyFile = copyFile;
const cp = (0, _utils.notImplemented)("fs.cp");
exports.cp = cp;
const open = (0, _utils.notImplemented)("fs.open");
exports.open = open;
const opendir = (0, _utils.notImplemented)("fs.opendir");
exports.opendir = opendir;
const rename = (0, _utils.notImplemented)("fs.rename");
exports.rename = rename;
const truncate = (0, _utils.notImplemented)("fs.truncate");
exports.truncate = truncate;
const rm = (0, _utils.notImplemented)("fs.rm");
exports.rm = rm;
const rmdir = (0, _utils.notImplemented)("fs.rmdir");
exports.rmdir = rmdir;
const mkdir = (0, _utils.notImplemented)("fs.mkdir");
exports.mkdir = mkdir;
const readdir = (0, _utils.notImplemented)("fs.readdir");
exports.readdir = readdir;
const readlink = (0, _utils.notImplemented)("fs.readlink");
exports.readlink = readlink;
const symlink = (0, _utils.notImplemented)("fs.symlink");
exports.symlink = symlink;
const lstat = (0, _utils.notImplemented)("fs.lstat");
exports.lstat = lstat;
const stat = (0, _utils.notImplemented)("fs.stat");
exports.stat = stat;
const link = (0, _utils.notImplemented)("fs.link");
exports.link = link;
const unlink = (0, _utils.notImplemented)("fs.unlink");
exports.unlink = unlink;
const chmod = (0, _utils.notImplemented)("fs.chmod");
exports.chmod = chmod;
const lchmod = (0, _utils.notImplemented)("fs.lchmod");
exports.lchmod = lchmod;
const lchown = (0, _utils.notImplemented)("fs.lchown");
exports.lchown = lchown;
const chown = (0, _utils.notImplemented)("fs.chown");
exports.chown = chown;
const utimes = (0, _utils.notImplemented)("fs.utimes");
exports.utimes = utimes;
const lutimes = (0, _utils.notImplemented)("fs.lutimes");
exports.lutimes = lutimes;
const realpath = (0, _utils.notImplemented)("fs.realpath");
exports.realpath = realpath;
const mkdtemp = (0, _utils.notImplemented)("fs.mkdtemp");
exports.mkdtemp = mkdtemp;
const writeFile = (0, _utils.notImplemented)("fs.writeFile");
exports.writeFile = writeFile;
const appendFile = (0, _utils.notImplemented)("fs.appendFile");
exports.appendFile = appendFile;
const readFile = (0, _utils.notImplemented)("fs.readFile");
exports.readFile = readFile;
const watch = (0, _utils.notImplemented)("fs.watch");
exports.watch = watch;