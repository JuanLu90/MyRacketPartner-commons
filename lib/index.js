"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _resolvers = require("./resolvers");
Object.keys(_resolvers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resolvers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resolvers[key];
    }
  });
});