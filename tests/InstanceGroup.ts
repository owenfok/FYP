import  { datas} from "../stack"
import { expect } from "chai"
import "mocha"


describe("Instance group", () => {
    it("'instance group name is instance-group-1", () => {
        expect(datas["InstanceGroupName"], "Name should is instance-group-1 ").to.equal('instance-group-1');
    })


    it("instance group size min 1 and max 1", () => {
        expect(datas["InstanceGroupSize"], "should min 1 and max 1 ").to.equal(1);
    })

})
