"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _stylesUtil["default"];
  }
});
Object.defineProperty(exports, "matchesResolvers", {
  enumerable: true,
  get: function get() {
    return _matches["default"];
  }
});
var _matches = _interopRequireDefault(require("./resolvers/matches.resolvers"));
var _stylesUtil = _interopRequireDefault(require("./utils/stylesUtil"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }