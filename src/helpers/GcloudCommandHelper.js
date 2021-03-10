"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GcloudCommandHelper = void 0;
var path = require("path");
var CommandHelper_1 = require("./CommandHelper");
var sdkPath = process.env.GCP_SDK_PATH || "gcloud";
if (path.isAbsolute(sdkPath)) {
    sdkPath = "\"" + sdkPath + "\"";
}
var GcloudCommandHelper = /** @class */ (function (_super) {
    __extends(GcloudCommandHelper, _super);
    function GcloudCommandHelper(execOptions) {
        if (execOptions === void 0) { execOptions = {}; }
        return _super.call(this, sdkPath, execOptions) || this;
    }
    return GcloudCommandHelper;
}(CommandHelper_1.CommandHelper));
exports.GcloudCommandHelper = GcloudCommandHelper;
