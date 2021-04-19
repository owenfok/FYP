import * as pulumi from "@pulumi/pulumi";
import { expect } from "chai"
import "mocha"
import * as stack from "./stack.json"

const a = stack.deployment.resources
const b = a[0].outputs
//console.log(b)

describe("Comput Engine", () => {
    it("Machine type using f1 micro ", () => {
        expect(b.machineName, "Machine type should is f1 mirco").to.equal('f1-micro');
    })


    it("Zone in asia-east2-a ", () => {
        expect(b.instanceZone, "should in asia-east2-a").to.equal("asia-east2-a");
    })

    it("Disable instance delete protection ", () => {
        expect(b.instanceDeletionProtestion, "should disable instance delete protection").to.equal(false);
    })

})
