"use strict";
// https://cloud.google.com/sdk/gcloud/reference/container/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcloudContainer = void 0;
var machineTypes_1 = require("./enums/container/machineTypes");
var GcloudBase_1 = require("./GcloudBase");
var GcloudContainerClusters_1 = require("./GcloudContainer/GcloudContainerClusters");
var GcloudContainer = /** @class */ (function (_super) {
    __extends(GcloudContainer, _super);
    function GcloudContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.commandPrefix = "container";
        _this.machineTypes = machineTypes_1.machineTypes;
        return _this;
    }
    GcloudContainer.prototype.clusters = function () {
        return this.extend(GcloudContainerClusters_1.GcloudContainerClusters);
    };
    return GcloudContainer;
}(GcloudBase_1.GcloudBase));
exports.GcloudContainer = GcloudContainer;
