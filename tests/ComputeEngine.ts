import * as pulumi from "@pulumi/pulumi"
import * as gcp from "@pulumi/gcp"
import "mocha"
import { expect } from "chai"


describe("Comput Engine", () => {
    ////////////////////////////////////////////////////////////////////////////   
    //   const gcn = gcp.compute.getInstance({
    // name: "vm"
    //});
    //const instanceZone = gcn.then(gcn => gcn.zone)
    //const instanceBootDisk =  gcn.then(gcn => gcn.bootDisks)
    //const instanceDeletionProtestion =  gcn.then(gcn => gcn.deletionProtection)
    /////////////////////////////////////////////////////////////////////////////

    const gcn = pulumi.output(gcp.compute.getInstance({
        name: "vm"
    }, { async: true }))

    it("Machine type using f1 micro ", () => {
        const machineName = gcn.machineType
        expect(machineName, "Machine type should is f1 mirco").to.equal("f1-micro");
        console.log(machineName)
    })

    it("Zone in asia-east2-a ", () => {
        const instanceZone = gcn.zone
        expect(instanceZone, "should in asia-east2-a").to.equal("asia-east2-a");
        console.log(instanceZone)
    })

    it("Instance BootDisk is ubuntu", () => {
        const instanceBootDisk = gcn.bootDisks
        expect(instanceBootDisk, "BootDisk should is ubuntu").to.equal("ubuntu-1804-bionic-v20210412");
        console.log(instanceBootDisk)
    })

    it("Disable instance delete protection ", () => {
        const instanceDeletionProtestion = gcn.deletionProtection
        expect(instanceDeletionProtestion, "should disable instance delete protection").to.equal(false);
        console.log(instanceDeletionProtestion)
    })


    console.log(gcn)
    //console.log(machineName)
    //console.log(instanceZone)
    // console.log(instanceBootDisk)
    // console.log(instanceDeletionProtestion)

})
