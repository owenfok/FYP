import * as pulumi from "@pulumi/pulumi";
import { expect } from "chai"
import "mocha"
import * as stack from "../stack.json"

const data = stack.deployment.resources[0].outputs

describe("Comput Engine", () => {
    it("Machine type using f1 micro ", () => {
        expect(data.machineName, "Machine type should is f1 mirco").to.equal('f1-micro');
    })


    it("Zone in asia-east2-a ", () => {
        expect(data.instanceZone, "should in asia-east2-a").to.equal("asia-east2-a");
    })

    it("Disable instance delete protection ", () => {
        expect(data.instanceDeletionProtestion, "should disable instance delete protection").to.equal(false);
    })

    it("The OS is debian 10 ", () => {

        expect(data.instanceImage, "should is debian 10").to.equal("https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-10-buster-v20210316");
    })

    it("The drive size is 10 GB  ", () => {

        expect(data.instanceSize, "should is 10 GB").to.equal(10);
    })

})
