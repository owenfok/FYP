import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";


describe("Comput Engine", async () => {

    const computeInstance = pulumi.output(gcp.compute.getInstance({
        name: "vm",
        zone: "asia-east2",
    }));
    
    it("Comput Engine instance name VM", async() => {
        expect(computeInstance.name, "should have instance").to.equal(
            "vm"
        );
    })

    it("Comput Engine instance zone in asia-east2", () => {
        expect(computeInstance.zone, "should have instance").to.equal(
            "asia-east2"
        );
    })

    console.log(computeInstance)

})

