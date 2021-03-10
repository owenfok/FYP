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
exports.__esModule = true;
var src_1 = require("./src");
function quickStart() {
    return __awaiter(this, void 0, void 0, function () {
        var gcloudSDK, help, version, gcloud, gcloudSDK1, gcloudSDK2, gcloudSDK3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new src_1.GcloudSdk("project-name")];
                case 1:
                    gcloudSDK = _a.sent();
                    return [4 /*yield*/, gcloudSDK.help()];
                case 2:
                    help = _a.sent();
                    return [4 /*yield*/, gcloudSDK.version()];
                case 3:
                    version = _a.sent();
                    gcloud = gcloudSDK.init();
                    return [4 /*yield*/, new src_1.GcloudSdk("project-name", { clientEmail: "abc@example.com" })];
                case 4:
                    gcloudSDK1 = _a.sent();
                    return [4 /*yield*/, new src_1.GcloudSdk("project-name", { useInteractiveLogin: true })];
                case 5:
                    gcloudSDK2 = _a.sent();
                    return [4 /*yield*/, new src_1.GcloudSdk("project-name", { keyFilename: "serviceAccount.json" })];
                case 6:
                    gcloudSDK3 = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function cloudFunctions() {
    return __awaiter(this, void 0, void 0, function () {
        var gcloud, functions, help, regions, logs, eventTypes, list, _i, list_1, item, describeResult, callResult, name, region, deploy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new src_1.GcloudSdk("project-name").init()];
                case 1:
                    gcloud = _a.sent();
                    functions = gcloud.functions();
                    return [4 /*yield*/, functions.help()];
                case 2:
                    help = _a.sent();
                    return [4 /*yield*/, functions.regions()];
                case 3:
                    regions = _a.sent();
                    return [4 /*yield*/, functions.logs()];
                case 4:
                    logs = _a.sent();
                    return [4 /*yield*/, functions.eventTypes()];
                case 5:
                    eventTypes = _a.sent();
                    return [4 /*yield*/, functions.list()];
                case 6:
                    list = _a.sent();
                    _i = 0, list_1 = list;
                    _a.label = 7;
                case 7:
                    if (!(_i < list_1.length)) return [3 /*break*/, 11];
                    item = list_1[_i];
                    return [4 /*yield*/, functions.describe(item.name, { region: item.region })];
                case 8:
                    describeResult = _a.sent();
                    if (!(item.status === "READY" || item.status === "ACTIVE")) return [3 /*break*/, 10];
                    return [4 /*yield*/, functions.call(item.name, { region: item.region, data: { name: "value" } })];
                case 9:
                    callResult = _a.sent();
                    _a.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 7];
                case 11:
                    name = "helloGET";
                    region = gcloud.regions.usCentral1;
                    return [4 /*yield*/, functions
                            .deploy(name, {
                            triggerHttp: true,
                            entryPoint: "testing",
                            runtime: functions.runtimes.nodejs8,
                            region: region,
                            memory: functions.memory.M128,
                            setEnvVars: "name=gcp"
                        })];
                case 12:
                    deploy = _a.sent();
                    return [4 /*yield*/, functions["delete"](name, { region: region })];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function cloudOrganizations() {
    return __awaiter(this, void 0, void 0, function () {
        var gcloud, organizations, list, _i, list_2, item, describe_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new src_1.GcloudSdk(process.env.GCP_PROJECT_NAME).init()];
                case 1:
                    gcloud = _a.sent();
                    organizations = gcloud.organizations();
                    return [4 /*yield*/, organizations.list()];
                case 2:
                    list = _a.sent();
                    _i = 0, list_2 = list;
                    _a.label = 3;
                case 3:
                    if (!(_i < list_2.length)) return [3 /*break*/, 6];
                    item = list_2[_i];
                    return [4 /*yield*/, organizations.describe(item.id)];
                case 4:
                    describe_1 = _a.sent();
                    console.log(describe_1);
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function cloudDatastore() {
    return __awaiter(this, void 0, void 0, function () {
        var gcloud, datastore, datastoreIndexes, listResult, createResult, cleanupResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new src_1.GcloudSdk("project-name").init()];
                case 1:
                    gcloud = _a.sent();
                    datastore = gcloud.datastore();
                    datastoreIndexes = datastore.indexes();
                    return [4 /*yield*/, datastoreIndexes.list()];
                case 2:
                    listResult = _a.sent();
                    return [4 /*yield*/, datastoreIndexes.create("./index.yaml")];
                case 3:
                    createResult = _a.sent();
                    return [4 /*yield*/, datastoreIndexes.cleanup("./index.yaml")];
                case 4:
                    cleanupResult = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
