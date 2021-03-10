"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CommandHelper = void 0;
var child_process = __importStar(require("child_process"));
var debug_1 = __importDefault(require("debug"));
var utils_1 = require("../utils");
var debug = debug_1.default("gcloud");
var CommandHelper = /** @class */ (function () {
    function CommandHelper(commandPath, execOptions) {
        if (execOptions === void 0) { execOptions = {}; }
        this.commandPath = commandPath;
        this.params = [];
        this.posParams = [];
        this.arguments = [];
        this.execOptions = Object.assign({
            shell: true,
            cwd: process.cwd(),
        }, execOptions);
    }
    CommandHelper.prototype.addParams = function (params) {
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            this.params.push(param);
        }
        return this;
    };
    CommandHelper.prototype.addPosParams = function (params) {
        for (var _i = 0, params_2 = params; _i < params_2.length; _i++) {
            var param = params_2[_i];
            this.posParams.push(param);
        }
        return this;
    };
    CommandHelper.prototype.addArgument = function (argument) {
        for (var _i = 0, _a = Object.entries(argument); _i < _a.length; _i++) {
            var _b = _a[_i], name_1 = _b[0], value = _b[1];
            var argumentName = "--" + utils_1.camelToDash(name_1);
            this.arguments.push(argumentName);
            if (value) {
                // add value
                if (Array.isArray(value) && value.length > 0) {
                    this.arguments.push(value.join(", "));
                }
                else {
                    if (typeof value === "string") {
                        var stringValue = value;
                        if (process.platform === "win32") {
                            stringValue = stringValue.replace(/&/g, "^&");
                        }
                        var quotedValue = "\"" + utils_1.escapeQuotes(stringValue) + "\"";
                        this.arguments.push(quotedValue);
                    }
                    else if (typeof value === "number") {
                        this.arguments.push(value.toString());
                    }
                    else if (typeof value === "object") {
                        var resultValue = Object.entries(value).map(function (_a) {
                            var objectKey = _a[0], objectValue = _a[1];
                            if (process.platform === "win32") {
                                objectValue = objectValue.toString().replace(/&/g, "^&");
                            }
                            return objectKey + "=" + utils_1.escapeQuotes(objectValue);
                        }).join(",");
                        this.arguments.push(resultValue);
                    }
                    else {
                        // do nothing
                    }
                }
            }
        }
        return this;
    };
    CommandHelper.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var command, output;
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        command = this.commandPath + " " + (_a = (_b = this.params).concat.apply(_b, this.arguments)).concat.apply(_a, this.posParams).join(" ");
                        debug("exec:", command);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                child_process.exec(command, _this.execOptions, function (err, stdout, stderr) {
                                    if (err) {
                                        return reject(err);
                                    }
                                    resolve({ stdout: stdout, stderr: stderr });
                                });
                            })];
                    case 1:
                        output = _c.sent();
                        return [2 /*return*/, output];
                }
            });
        });
    };
    // no use yet
    CommandHelper.prototype.execInteractive = function (interactives, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var output;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var stdout = "";
                            var stderr = "";
                            var command = _this.commandPath + " " + _this.params.join(" ") + " " + _this.arguments.join(" ");
                            debug("execInteractive:", command);
                            var spawn = child_process.spawn(command, [], _this.execOptions);
                            // if we need to pass something to stdin first
                            spawn.stdin.setDefaultEncoding("utf8");
                            if (options.initStdin !== undefined) {
                                spawn.stdin.write(options.initStdin);
                            }
                            // stdout
                            spawn.stdout.setEncoding("utf8");
                            spawn.stdout.on("data", function (data) {
                                stdout += data;
                                debug("execInteractive:stdout", data);
                                for (var _i = 0, interactives_1 = interactives; _i < interactives_1.length; _i++) {
                                    var interactive = interactives_1[_i];
                                    if (data.match(interactive.match)) {
                                        var respond = interactive.respond + (interactive.respond.match(/\r?\n/) ? "" : "\n");
                                        spawn.stdin.write(respond);
                                    }
                                }
                            });
                            // stderr
                            spawn.stderr.setEncoding("utf8");
                            spawn.stderr.on("data", function (data) {
                                debug("execInteractive:stderr", data);
                                if (options.sendNewLineOnStderr) {
                                    spawn.stdin.write("\n");
                                }
                                stderr += data;
                            });
                            // we only listen to close stream is enough
                            spawn.once("close", function (code) {
                                spawn.stdout.removeAllListeners();
                                spawn.stderr.removeAllListeners();
                                spawn.removeAllListeners();
                                resolve({ stdout: stdout, stderr: stderr });
                            });
                            spawn.on("error", function (err) {
                                // do nothing
                            });
                            spawn.on("exit", function (code) {
                                // do nothing
                            });
                        })];
                    case 1:
                        output = _a.sent();
                        return [2 /*return*/, output];
                }
            });
        });
    };
    return CommandHelper;
}());
exports.CommandHelper = CommandHelper;
