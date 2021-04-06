import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";

describe("InstanceGroup", async () => {
    const  InstanceGroup = pulumi.output(gcp.compute.getInstanceGroup({
        name: "instance-group-name",
        zone: "us-central1-a",
    }, { async: true }));

    it("One InstanceGroup ", async () => {

        expect(InstanceGroup.get.length, "should have InstanceGroup").to.equal(
            1
        );

    });

})
