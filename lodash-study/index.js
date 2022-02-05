"use strict";
exports.__esModule = true;
var _ = require("lodash");
var array = require("lodash/array");
function getZipFromFull() {
    return _.zip(['a', 'b'], [1, 2], [true, false]);
}
function getZipFromArray() {
    return array.zip(['a', 'b'], [1, 2], [true, false]);
}
console.log(getZipFromFull(), getZipFromArray());
