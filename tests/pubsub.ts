import { datas } from "../ComputeEngine"
import { expect } from "chai"
import "mocha"


describe("PubSub", () => {

    it("Topic name is abc", () => {
        expect(datas["pubsubTopicName"], "Name should is abc").to.equal("web");
    })

    it("Topic name is abc", () => {
        expect(datas["pubsubTopicLabels"], "Should have Labels ").to.equal({"foo":"a"});
    })

    it("Topic name is abc", () => {
        expect(datas["pubsubTopicMessageStoragePolicies"], "Should have message storage policies").to.equal([]);
    })


})
