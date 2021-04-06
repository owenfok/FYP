import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";
// by name

describe("Comput Engine", async () => {

    const generic_regex = pulumi.output(gcp.compute.getInstanceTemplate({
        filter: "name eq generic-tpl-.*",
        mostRecent: true,
        project: "gcp-learning-lab-309612"
    }, { async: true }));

    it("One Comput Engine instance ", async () => {

        expect(generic_regex.get.length, "should have instance").to.equal(
            1
        );

    });


})