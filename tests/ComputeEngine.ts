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
        expect(computeInstance.get.name.length, "should have instance").to.equal(2);
    })

    it("Comput Engine instance zone in asia-east2", () => {
        expect(computeInstance.zone, "should have instance").to.equal(
            "asia-east2"
        );
    })

    //console.log(computeInstance)

})

