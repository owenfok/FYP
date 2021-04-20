import  { datas } from "../stack"
import { expect } from "chai"
import "mocha"


describe("PubSub", () => {

    it("Topic name is abc", () => {
        expect(datas["pubsubTopicName"], "Name should is abc").to.equal("web");
    })

    it("PubSub Topic Labels", () => {
        expect(datas["pubsubTopicLabels"], "Should have Labels ").to.equal({"foo":"a"});
    })

    it("PubSub Topic Message Storage Policies", () => {
        expect(datas["pubsubTopicMessageStoragePolicies"], "Should have message storage policies").to.equal([]);
    })


})
