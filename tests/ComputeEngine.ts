import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";


describe("Comput Engine", async () => {
    const computeInstance = pulumi.output(gcp.compute.getInstance({
        name: "vm",
        zone: "asia-east2-a"
        
    },{async:true}));

    const machineName = computeInstance.machineType
    const instanceZone = computeInstance.zone
    const instanceBootDisk = computeInstance.bootDisks
    const instanceDeletionProtestion = computeInstance.deletionProtection


    it("Machine type is f1 mirco ", async () => {
        expect(machineName, "should have instance").to.equal("f1-mirco");
    })

    it("Zone in asia-east2-a ", async () => {
        expect(instanceZone, "should have instance").to.equal("asia-east2-a");
    })

    it("Instance BootDisk is ubuntu", async () => {
        expect(instanceBootDisk, "should have instance").to.equal("ubuntu-1804-bionic-v20210412");
    })
        
    it("Disable instance delete protection ", async () => {
        expect(instanceDeletionProtestion, "should have instance").to.equal(false);
    })


    //console.log(computeInstance)
    //console.log(machineName)
    //console.log(instanceZone)
    //console.log(instanceBootDisk)



})
