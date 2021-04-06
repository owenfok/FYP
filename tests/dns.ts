
import { assert, expect } from "chai";
import "mocha";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

describe("setup dns", () => {
    it("should have one domain ", async () => {
        const example_zone = new gcp.dns.ManagedZone("example-zone", {
            description: "Example DNS zone",
            name: "my-domain",
            dnsName: "my-domain.com",
            labels: {
                foo: "bar",
            },
        });
        expect(example_zone.dnsName, "with DNS name (my-domain.com)").to.equal(
            "my-domain.com");
    })
})