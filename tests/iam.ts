import  { datas} from "../stack"
import { expect } from "chai"
import "mocha"



describe("Try to grep role viewer", () => {    
    it("should have role 'viewer' ", async () => {
        expect(datas["viewerId"], "with the role 'viewer'").to.equal("roles/compute.viewer");
    });
    it("title of viewer should be 'compute viewer ", async () => {
        expect(datas["viewerTitle"], "with the role 'viewer'").to.equal("Compute Viewer");
    });
    it("should have all permissions of 'viewer' ", async () => {
        expect(datas["viewerPermissions"], "should be 187 rules").to.equal(187);
    });
})


describe("Try to create a role", () => {  
    it("should have role 'testing' ", async () => {
        expect(datas["testingId"], "should have role 'testing'").to.equal("projects/gcp-learning-lab-309612/roles/testing");
    });

    it("title should be 'testing'", async () => {
        expect(datas["testingTitle"], "title should be 'testing'").to.equal("testing");
    });

    it("should have 5 permissions ", async () => {
        expect(datas["testingPermissions"], "should have role 'testing'").to.equal(5);
    });

    it("should have permission of listing apiconfigs ", async () => {
        expect(datas["testingP1"], "should have permission apiconfig.list").to.equal("apigateway.apiconfigs.list");
    });

    it("should have permission of listing APIs ", async () => {
        expect(datas["testingP2"], "should have permission apis.list").to.equal("apigateway.apis.list");
    });

    it("should have permission of listing api gateways ", async () => {
        expect(datas["testingP3"], "should have permission gateways.list").to.equal("apigateway.gateways.list");
    });

    it("should have permission of listing locations ", async () => {
        expect(datas["testingP4"], "should have permission locations.list").to.equal("apigateway.locations.list");
    });

    it("should have permission of listing operations ", async () => {
        expect(datas["testingP5"], "should have permission operations.list").to.equal("apigateway.operations.list");
    });

})
