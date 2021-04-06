
import { assert, expect } from "chai";
import "mocha";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

describe("setup database", () => {
    it("should have database instance ", async () => {
        const instance = new gcp.sql.DatabaseInstance("instance", {
            region: "us-central1",
            settings: {
                tier: "db-f1-micro",
            }
        });
        const database = new gcp.sql.Database("database", { instance: instance.name })
                expect(instance.region.length, "database in one instance").to.equal(1);
    })

})