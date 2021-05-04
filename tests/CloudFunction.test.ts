import { datas } from "../stack"
import { expect } from "chai"
import "mocha";
import * as chai from "chai";
import chaiString from "chai-string";
chai.use(chaiString);


describe("CloudFunction Name", () => {
    it("Check CloudFunction Name 'gcplab' .", async () => {
        expect(datas["GetCloudFunction"]).to.equal("gcplab");
    });
});


describe("CloudFunction Region", () => {
    it("Check CloudFunction Region 'us-east1' .", async () => {
        expect(datas["GetCloudFunctionRegion"]).to.equal("us-east1");
    });
});


describe("CloudFunction Entry Point set 'hello_pubsub' ", () => {
    it("Check CloudFunction Entry Point 'hello_pubsub' .", async () => {
        expect(datas["GetCloudFunctionEntryPt"]).to.equal("hello_pubsub");
    });
});


describe("Use pubsub to trigger", () => {
    it("Set CloudFunction trigger publish .", async () => {
        expect(datas["GetCloudFunctionTriggers"]).to.equal("google.pubsub.topic.publish");
    });

    it("Set CloudFunction failure Policies 'false' .", async () => {
        expect(datas["GetCloudFunctionPolicies"]).to.equal(false);
    });

    it("Set PubSub In 'gcr' .", async () => {
        expect(datas["GetCloudFunctionResource"]).to.endsWith("topics/gcr");
    });
});



describe("CloudFunction runtime python3.9 ", () => {
    it("Check CloudFunction runtime python3.9 .", async () => {
        expect(datas["GetCloudFunctionRuntime"]).to.equal("python39");
    });
});


describe("CloudFunction set timeout 60 seconds.  ", () => {
    it("CloudFunction set timeout 60 seconds .", async () => {
        expect(datas["GetCloudFunctionTimeout"]).to.equal(60);
    });
});


describe("CloudFunction set VpcConnector, 'gcplab'  ", () => {
    it("CloudFunction set VpcConnector, 'gcplab' .", async () => {
        expect(datas["GetCloudFunctionVpcConnector"]).to.equal("gcplab");
    });
});

describe("CloudFunction set VpcConnector Egress Private Ranges Only  ", () => {
    it("CloudFunction set VpcConnector Egress PRIVATE RANGES ONLY .", async () => {
        expect(datas["GetCloudFunctionVPCsetting"]).to.equal("PRIVATE_RANGES_ONLY");
    });
});
