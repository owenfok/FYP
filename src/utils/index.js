"use strict";
exports.__esModule = true;
exports.escapeQuotes = exports.camelToSnakeCapitalizeWithoutUnderscore = exports.camelToSnakeCapitalize = exports.camelToDotCapitalize = exports.camelToDash = void 0;
function camelToDash(value) {
    return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
exports.camelToDash = camelToDash;
function camelToDotCapitalize(value) {
    return value.replace(/([a-z])([A-Z])/g, "$1.$2").toUpperCase();
}
exports.camelToDotCapitalize = camelToDotCapitalize;
function camelToSnakeCapitalize(value) {
    return value.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}
exports.camelToSnakeCapitalize = camelToSnakeCapitalize;
function camelToSnakeCapitalizeWithoutUnderscore(value) {
    return value.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
}
exports.camelToSnakeCapitalizeWithoutUnderscore = camelToSnakeCapitalizeWithoutUnderscore;
function escapeQuotes(value) {
    return value.replace(/"/g, "\\\"");
}
exports.escapeQuotes = escapeQuotes;
