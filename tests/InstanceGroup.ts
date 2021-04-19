import { expect } from "chai"
import "mocha"
import * as stack from "./stack.json"

const a = stack.deployment.resources
const b = a[0].outputs
console.log(b)

describe("Comput Engine", () => {
    it("'instance group name is instance-group-1", () => {
        expect(b.InstanceGroupName, "Name should is instance-group-1 ").to.equal('instance-group-1');
    })


    it("instance group size min 1 and max 1", () => {
        expect(b.InstanceGroupSize, "should min 1 and max 1 ").to.equal(1);
    })

})
