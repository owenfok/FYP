// import * as k8s from "@pulumi/kubernetes";
// import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { describe, it } from "mocha";
import { expect } from 'chai';



describe("Subnet Infra", () => {
    const computeSubNetwork : gcp.compute.Subnetwork = adianNet;

    it("Check network Name", async () => {
        const subnetName = await promise(computeSubNetwork.ipCidrRange)
        expect(subnetName).to.equal("10.2.1.0/24");
    });

    it("Check network Region", async () => {
        const subnetRegion = await promise(computeSubNetwork.region)
        expect(subnetRegion).to.equal("us-east1");
    });

});

    



describe("Set Private Subnet. ", () => {
    const privateSubnet : gcp.compute.Subnetwork = PRIVATESub;

    it("Set Private Subnet name.", async () => {
        const CheckPriSubName = await promise(privateSubnet.name)
        expect(CheckPriSubName).to.equal("msat-private-subnet-6adf2d8");
    });


    it("Set Private Subnet ip GoogleAccess.", async () => {
        const CheckGoogleAccess = await promise(privateSubnet.privateIpGoogleAccess)
        expect(CheckGoogleAccess).to.equal(true);
    });

    it("Set Private Subnet ip.", async () => {
        const CheckgatewayAddress = await promise(privateSubnet.gatewayAddress)
        expect(CheckgatewayAddress).to.equal("172.2.0.1");
    });


});

describe("Set VPC SETTING ", () => {
    const publicSubnet : gcp.compute.Subnetwork = Cidr;
    it("Check Cidr", async () => {
        const iCidr = await promise(publicSubnet.ipCidrRange)
        expect(iCidr).to.equal("172.0.0.0/20");
    });

    const vpcRouter : gcp.compute.Router = VPCRouter;
    it("Check vpc router name.", async () => {
        const router = await promise(vpcRouter.name)
        expect(router).to.equal("msat-router-5caae0d");
    });

});











