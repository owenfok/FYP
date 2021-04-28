import { datas } from "../stack"
import { expect } from "chai"
import "mocha";



describe("VPC Network", () => {
    it("Check network Name", async () => {
        expect(datas["net"]).to.equal("gateway-1");
    });


});


describe("Public Subnet ", () => {
    it("Check Subnet Name", async () => {
        expect(datas["PsubnetName"]).to.equal("public");
    });

    it("Check Subnet Region.", async () => {
        expect(datas["PsubnetReGion"]).to.equal('us-east1');
    });
    
    it("Check Subnet Gateway Address.", async () => {
        expect(datas["PsubnetGateway"]).to.equal("172.0.0.1");
    });

    it("Check Subnet Ip Cidr Range.", async () => {
        expect(datas["PsubnetRange"]).to.equal("172.0.0.0/20");
    });
});



describe("Private Subnet ", () => {
    it("Check Subnet Name.", async () => {
        expect(datas["PrivateSubnetName"]).to.equal("private");
    });

    it("Check Subnet Region.", async () => {
        expect(datas["PrivateSubnetRegion"]).to.equal('us-east1');
    });

    it("Check Subnet Gateway Address.", async () => {
        expect(datas["PrivateSubnetGateway"]).to.equal("172.2.0.1");
    });

    it("Check Subnet Ip Cidr Range.", async () => {
        expect(datas["PrivateSubnetRange"]).to.equal("172.2.0.0/20");
    });
});
