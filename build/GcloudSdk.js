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
exports.GcloudSdk = void 0;
var debug_1 = __importDefault(require("debug"));
var fs = __importStar(require("fs"));
var Gcloud_1 = require("./Gcloud");
var GcloudCommandHelper_1 = require("./helpers/GcloudCommandHelper");
var debug = debug_1.default("gcloud");
var sdkPath = process.env.GCP_SDK_PATH || "gcloud";
var GcloudSdk = /** @class */ (function () {
    function GcloudSdk(project, projectOptions) {
        if (project === void 0) { project = ""; }
        if (projectOptions === void 0) { projectOptions = {}; }
        this.project = project;
        this.projectOptions = Object.assign({
            cwd: process.cwd(),
            clientEmail: "",
            useInteractiveLogin: true,
            keyFilename: "",
        }, projectOptions);
        if (this.projectOptions.keyFilename) {
            try {
                var keyJson = JSON.parse(fs.readFileSync(this.projectOptions.keyFilename).toString());
                this.projectOptions.clientEmail = keyJson.client_email;
            }
            catch (err) {
                throw new Error("keyFilename " + this.projectOptions.keyFilename + " not exist / invalid json format");
            }
        }
    }
    GcloudSdk.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var version, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._validateProjectOptions(this.projectOptions);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.version()];
                    case 2:
                        version = _a.sent();
                        debug("gcloud version: " + version);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        debug(err_1);
                        // tslint:disable-next-line:max-line-length
                        throw Error("Google Cloud SDK not installed. Please check if you have added the SDK into the PATH variable.");
                    case 4: return [4 /*yield*/, this._login()];
                    case 5:
                        if (_a.sent()) {
                            return [2 /*return*/, new Gcloud_1.Gcloud(this.project, this.projectOptions)];
                        }
                        else {
                            throw new Error("There is no authorized user. Please try again.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GcloudSdk.prototype.authWithInteractive = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new GcloudCommandHelper_1.GcloudCommandHelper()
                            .addParams(["auth", "login"])
                            .exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.stderr];
                }
            });
        });
    };
    GcloudSdk.prototype.authWithServiceAccount = function (keyFilename) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new GcloudCommandHelper_1.GcloudCommandHelper()
                            .addParams([
                            "auth",
                            "activate-service-account",
                            "--key-file=" + keyFilename,
                        ])
                            .exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.stderr];
                }
            });
        });
    };
    GcloudSdk.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, results, _i, _a, line, matches, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new GcloudCommandHelper_1.GcloudCommandHelper()
                                .addParams(["auth", "revoke"])
                                .exec()];
                    case 1:
                        result = _b.sent();
                        results = result.stdout.split("\n");
                        for (_i = 0, _a = results.slice(1); _i < _a.length; _i++) {
                            line = _a[_i];
                            matches = line.trim().match(/- (.*)/);
                            if (matches) {
                                debug("You are signed out from " + matches[1] + ".");
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        debug(err_2);
                        debug("No account to sign out.");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GcloudSdk.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new GcloudCommandHelper_1.GcloudCommandHelper()
                            .addArgument({ help: "" })
                            .exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.stdout];
                }
            });
        });
    };
    GcloudSdk.prototype.version = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new GcloudCommandHelper_1.GcloudCommandHelper()
                            .addArgument({ version: "" })
                            .exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.stdout];
                }
            });
        });
    };
    GcloudSdk.prototype._login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, isSignedIn, listResults, _i, _a, line, matches, authResult, regex, matches;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, new GcloudCommandHelper_1.GcloudCommandHelper()
                            .addParams(["auth", "list"])
                            .exec()];
                    case 1:
                        result = _b.sent();
                        isSignedIn = false;
                        if (/Credentialed Accounts/.test(result.stdout)) {
                            listResults = result.stdout.trim().split("\n");
                            for (_i = 0, _a = listResults.slice(2); _i < _a.length; _i++) {
                                line = _a[_i];
                                matches = line.trim().match(/\*[ ]*(.*)/);
                                debug("Exist Account: " + line);
                                if (matches && (!this.projectOptions.clientEmail || matches[1] === this.projectOptions.clientEmail)) {
                                    debug("You already signed in as " + matches[1] + ".");
                                    isSignedIn = true;
                                    break;
                                }
                            }
                        }
                        if (!!isSignedIn) return [3 /*break*/, 6];
                        authResult = "";
                        if (!this.projectOptions.keyFilename) return [3 /*break*/, 3];
                        debug("Logging in with service account");
                        return [4 /*yield*/, this.authWithServiceAccount(this.projectOptions.keyFilename)];
                    case 2:
                        authResult = _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.projectOptions.useInteractiveLogin) return [3 /*break*/, 5];
                        debug("Please login to Google Cloud");
                        return [4 /*yield*/, this.authWithInteractive()];
                    case 4:
                        authResult = _b.sent();
                        _b.label = 5;
                    case 5:
                        regex = /You are now logged in as \[(.*)\]|service account credentials for: \[(.*)\]/;
                        matches = authResult.match(regex);
                        if (!matches) {
                            matches = authResult.match(regex);
                        }
                        if (matches) {
                            debug("You are signed in as " + (matches[1] || matches[2]) + ".");
                            isSignedIn = true;
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/, isSignedIn];
                }
            });
        });
    };
    GcloudSdk.prototype._validateProjectOptions = function (options) {
        if (options.cwd) {
            try {
                var result = fs.statSync(options.cwd);
            }
            catch (err) {
                if (err.code === "ENOENT") {
                    throw Error("Directory " + options.cwd + " doest not exist.");
                }
                else {
                    debug(err);
                    throw err;
                }
            }
        }
    };
    return GcloudSdk;
}());
exports.GcloudSdk = GcloudSdk;
