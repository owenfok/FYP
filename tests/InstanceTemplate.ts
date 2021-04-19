import * as pulumi from "@pulumi/pulumi";
import { expect } from "chai"
import "mocha"
import * as stack from "./stack.json"

const a = stack.deployment.resources

const b = a[0].outputs
//console.log(b)

describe("Instance template", () => {
    it("Machine type using f1 micro ", () => {
        expect(b.InstanceTemplateMachineType, "Machine type should is f1 mirco").to.equal('f1-micro');
    })


    it("Instance Template Metadata ", () => {
        expect(b.InstanceTemplateMetadata, "should have metadata").to.equal("sudo vi test.txt");
    })

    it("Instance template name ", () => {

        expect(b.InstanceTemplateName, " Name should is instance-template-1 ").to.equal("instance-template-1");
    })

})
