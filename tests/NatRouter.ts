import { datas } from "../stack"
import { expect } from "chai"
import "mocha";
import * as chai from "chai";
import chaiString from "chai-string";
chai.use(chaiString);

describe("Router Name", () => {
    it("Check Router Name", async () => {
        expect(datas["GetRouteName"]).to.equal("vpcroute");
    });
});

describe("Check CIDR", () => {
    it("Check Router CIDR", async () => {
        expect(datas["GetRouteIpRanges"]).to.equal("172.0.0.0/20");
    });
});

describe("Check Region", () => {
    it("Check Router Region", async () => {
        expect(datas["GetRouteRegion"]).to.equal("us-east1");
    });
});


describe("Add Network", () => {
    it("Check Router Network", async () => {
        expect(datas["GetRouteNetWork"]).to.endsWith("gateway-1");
    });
});


describe("Choose Route custom", () => {
    it("Choose Route custom", async () => {
        expect(datas["GetRouteMode"]).to.endsWith("CUSTOM");
    });
});
