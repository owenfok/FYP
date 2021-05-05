import  { datas} from "../stack"
import { expect } from "chai"
import "mocha"

describe("DNS", () => {


    it("dnsName should be 'qa-zone' ", async () => {
        expect(datas["dnsName"], "should have name 'qa-zone'").to.equal("qa-zone");
    })

    it("Should be private ", async () => {
        expect(datas["dnsVisability"], "Should be private").to.equal("private");
    })

    it("Should be only 1 nameserver", async () => {
        expect(datas["dnsNameServers"], "Should be only 1 nameserver").to.equal(1);
    })

})

