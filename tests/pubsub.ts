import  { datas } from "../stack"
import { expect } from "chai"
import "mocha"


describe("PubSub", () => {

    it("Topic name is MyTopic", () => {
        expect(datas["pubsubTopicName"], "Name should is abc").to.equal("MyTopic");
    })

    it("PubSub Topic Labels", () => {
        expect(datas["pubsubTopicLabels"], "Should have Labels ").to.equal({"foo":"a"});
    })

    it("PubSub Topic Message Storage Policies", () => {
        expect(datas["pubsubTopicMessageStoragePolicies"], "Should have message storage policies").to.equal([]);
    })


})
