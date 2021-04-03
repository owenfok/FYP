import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";



describe("Comput Engine", () => {

    it("One Comput Engine instance ", async () => {

        const WebServer = gcp.compute.getInstance({
            name: "vm",
            zone: "asia-east2",
        });

        expect(1,"should have instance").to.equal(
            WebServer.catch.name![0]
        );
    })
})

