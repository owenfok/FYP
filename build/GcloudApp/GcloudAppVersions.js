"use strict";
// https://cloud.google.com/sdk/gcloud/reference/app/services
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcloudAppVersions = void 0;
var GcloudBase_1 = require("../GcloudBase");
var GcloudAppVersions = /** @class */ (function (_super) {
    __extends(GcloudAppVersions, _super);
    function GcloudAppVersions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.commandPrefix = "app versions";
        return _this;
    }
    GcloudAppVersions.prototype.browse = function (services, argv) {
        if (argv === void 0) { argv = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = Array.isArray(services) ? services.join(" ") : services;
                        return [4 /*yield*/, this._exec(["browse", values], argv)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GcloudAppVersions.prototype.delete = function (version, argv) {
        if (argv === void 0) { argv = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["delete", version], argv)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GcloudAppVersions.prototype.describe = function (version, argv) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["describe", version], argv)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, this._parseYaml(result)];
                }
            });
        });
    };
    GcloudAppVersions.prototype.list = function (argv) {
        if (argv === void 0) { argv = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var table, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["list"], argv)];
                    case 1:
                        table = _a.sent();
                        headers = ["service", "versionId", "trafficSplit", "lastDeployed", "servingStatus"];
                        return [2 /*return*/, this._parseTable(table, headers)];
                }
            });
        });
    };
    GcloudAppVersions.prototype.migrate = function (version, argv) {
        if (argv === void 0) { argv = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["migrate", version], argv)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GcloudAppVersions.prototype.start = function (version, argv) {
        if (argv === void 0) { argv = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["start", version], argv)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GcloudAppVersions.prototype.stop = function (version, argv) {
        if (argv === void 0) { argv = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exec(["stop", version], argv)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return GcloudAppVersions;
}(GcloudBase_1.GcloudBase));
exports.GcloudAppVersions = GcloudAppVersions;