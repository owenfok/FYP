import * as pulumi from "@pulumi/pulumi";
import { expect } from "chai"
import "mocha"
import * as stack from "../stack.json"

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

    it("The OS is debian 10 ", () => {

        expect(b.instanceImage, "should is debian 10").to.equal("https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-10-buster-v20210316");
    })

    it("The drive size is 10 GB  ", () => {

        expect(b.instanceSize, "should is 10 GB").to.equal(10);
    })

})
