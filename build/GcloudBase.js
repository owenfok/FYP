"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcloudBase = void 0;
var debug_1 = __importDefault(require("debug"));
var yaml_1 = __importDefault(require("yaml"));
var GcloudCommandHelper_1 = require("./helpers/GcloudCommandHelper");
var utils_1 = require("./utils");
var debug = debug_1.default("gcloud");
var sdkPath = process.env.GCP_SDK_PATH || "gcloud";
var GcloudBase = /** @class */ (function () {
    function GcloudBase(project, projectOptions) {
        this.project = project;
        this.projectOptions = projectOptions;
        this.commandPrefix = "";
    }
    GcloudBase.prototype.extend = function (productType) {
        return new productType(this.project, this.projectOptions);
    };
    GcloudBase.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["--help"])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // region protected methods
    GcloudBase.prototype._createChildProcessHelper = function () {
        var helper = new GcloudCommandHelper_1.GcloudCommandHelper(this.projectOptions);
        helper.addParams([this.commandPrefix]);
        helper.addArgument({ project: this.project, quiet: "" });
        return helper;
    };
    GcloudBase.prototype._exec = function (params, argument, postParams) {
        if (argument === void 0) { argument = {}; }
        if (postParams === void 0) { postParams = []; }
        return __awaiter(this, void 0, void 0, function () {
            var helper, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        helper = this._createChildProcessHelper();
                        helper.addArgument(argument);
                        helper.addParams(params);
                        helper.addPosParams(postParams);
                        return [4 /*yield*/, helper.exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.stdout || result.stderr];
                }
            });
        });
    };
    GcloudBase.prototype._parseYaml = function (yaml) {
        return yaml_1.default.parse(yaml);
    };
    GcloudBase.prototype._parseTable = function (table, headers, options) {
        if (options === void 0) { options = {}; }
        var contentOffset = options.contentOffset || 0;
        var rows = table.trimRight().split(/\r?\n/).slice(contentOffset);
        var list = [];
        if (rows.length) {
            if (headers) {
                var headerRow = rows[0];
                var indexes_1 = [];
                for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                    var header = headers_1[_i];
                    var tryHeaders = [
                        utils_1.camelToSnakeCapitalize(header),
                        utils_1.camelToSnakeCapitalizeWithoutUnderscore(header),
                        utils_1.camelToDotCapitalize(header),
                    ];
                    var tryIndex = -1;
                    for (var _a = 0, tryHeaders_1 = tryHeaders; _a < tryHeaders_1.length; _a++) {
                        var tryHeader = tryHeaders_1[_a];
                        tryIndex = headerRow.indexOf(tryHeader);
                        if (tryIndex >= 0) {
                            break;
                        }
                    }
                    indexes_1.push(tryIndex);
                }
                // if we found header
                if (indexes_1.some(function (x) { return x >= 0; })) {
                    var _loop_1 = function (line) {
                        var listResult = {};
                        if (options.isSplitBySpace) {
                            var lines_1 = line.split(/[ ]+/);
                            headers.map(function (header, index) {
                                listResult[header] = lines_1[index];
                            });
                            list.push(listResult);
                        }
                        else {
                            headers.map(function (header, index) {
                                var x0 = indexes_1[index];
                                var x1 = index + 1 < indexes_1.length ? indexes_1[index + 1] - x0 : undefined;
                                listResult[header] = line.substr(x0, x1).trim();
                            });
                            list.push(listResult);
                        }
                    };
                    for (var _b = 0, _c = rows.slice(1); _b < _c.length; _b++) {
                        var line = _c[_b];
                        _loop_1(line);
                    }
                }
            }
            else {
                list = rows.slice(1);
            }
        }
        return list;
    };
    return GcloudBase;
}());
exports.GcloudBase = GcloudBase;
