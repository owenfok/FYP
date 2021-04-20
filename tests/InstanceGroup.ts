import { expect } from "chai"
import "mocha"
import * as stack from "../stack.json"

const data = stack.deployment.resources[0].outputs

describe("Comput Engine", () => {
    it("'instance group name is instance-group-1", () => {
        expect(data.InstanceGroupName, "Name should is instance-group-1 ").to.equal('instance-group-1');
    })


    it("instance group size min 1 and max 1", () => {
        expect(data.InstanceGroupSize, "should min 1 and max 1 ").to.equal(1);
    })

})
