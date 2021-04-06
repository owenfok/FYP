import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";


describe("Comput Engine", async () => {
    const computeInstance = pulumi.output(gcp.compute.getInstance({
        name: "vm",
        zone: "asia-east2-a"
        
    },{async:true}));

    it("should have instance ", async () => {
        expect(computeInstance.get.length, "should have instance").to.equal(1);
    })

    //console.log(computeInstance)

})
