"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gcloud = void 0;
var httpMethods_1 = require("./enums/httpMethods");
var regions_1 = require("./enums/regions");
var timeZones_1 = require("./enums/timeZones");
var zones_1 = require("./enums/zones");
var GcloudApp_1 = require("./GcloudApp");
var GcloudAuth_1 = require("./GcloudAuth");
var GcloudBuilds_1 = require("./GcloudBuilds");
var GcloudComponents_1 = require("./GcloudComponents");
var GcloudContainer_1 = require("./GcloudContainer");
var GcloudDatastore_1 = require("./GcloudDatastore");
var GcloudFunctions_1 = require("./GcloudFunctions");
var GcloudLogging_1 = require("./GcloudLogging");
var GcloudOrganizations_1 = require("./GcloudOrganizations");
var GcloudProjects_1 = require("./GcloudProjects");
var GcloudRun_1 = require("./GcloudRun");
var GcloudSchedulerJobs_1 = require("./GcloudSchedulerJobs");
var GcloudServices_1 = require("./GcloudServices");
var Gcloud = /** @class */ (function () {
    function Gcloud(project, projectOptions) {
        if (projectOptions === void 0) { projectOptions = {}; }
        this.project = project;
        this.projectOptions = projectOptions;
        this.regions = regions_1.regions;
        this.zones = zones_1.zones;
        this.timeZones = timeZones_1.timeZones;
        this.httpMethods = httpMethods_1.httpMethods;
    }
    Gcloud.prototype.extend = function (productType) {
        return new productType(this.project, this.projectOptions);
    };
    Gcloud.prototype.app = function () {
        return this.extend(GcloudApp_1.GcloudApp);
    };
    Gcloud.prototype.auth = function () {
        return this.extend(GcloudAuth_1.GcloudAuth);
    };
    Gcloud.prototype.builds = function () {
        return this.extend(GcloudBuilds_1.GcloudBuilds);
    };
    Gcloud.prototype.components = function () {
        return this.extend(GcloudComponents_1.GcloudComponents);
    };
    Gcloud.prototype.container = function () {
        return this.extend(GcloudContainer_1.GcloudContainer);
    };
    Gcloud.prototype.datastore = function () {
        return this.extend(GcloudDatastore_1.GcloudDatastore);
    };
    Gcloud.prototype.functions = function () {
        return this.extend(GcloudFunctions_1.GcloudFunctions);
    };
    Gcloud.prototype.logging = function () {
        return this.extend(GcloudLogging_1.GcloudLogging);
    };
    Gcloud.prototype.organizations = function () {
        return this.extend(GcloudOrganizations_1.GcloudOrganizations);
    };
    Gcloud.prototype.projects = function () {
        return this.extend(GcloudProjects_1.GcloudProjects);
    };
    Gcloud.prototype.run = function () {
        return this.extend(GcloudRun_1.GcloudRun);
    };
    Gcloud.prototype.schedulerJobs = function () {
        return this.extend(GcloudSchedulerJobs_1.GcloudSchedulerJobs);
    };
    Gcloud.prototype.services = function () {
        return this.extend(GcloudServices_1.GcloudServices);
    };
    return Gcloud;
}());
exports.Gcloud = Gcloud;
