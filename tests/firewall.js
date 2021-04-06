import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";


describe("forward", async () => {

    const forwarding_rule = pulumi.output(gcp.compute.getForwardingRule({
        name: "Webforwarding",
    }, { async: true }));


    it("One forward ", async () => {

        expect(forwarding_rule.get.length,"should have forward").to.equal(
            1
            );

    });
})
