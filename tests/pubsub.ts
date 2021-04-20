import * as pulumi from "@pulumi/pulumi";
import { expect } from "chai"
import "mocha"
import * as stack from "./stack.json"

const data = stack.deployment.resources[0].outputs


describe("PubSub", () => {
    
    it("Machine type using f1 micro ", () => {
        expect(data.pubsubTopicLabels, "Machine type should is f1 mirco").to.equal("","");
    })
    
    it("Topic Message Storage Policies", () => {
        expect(data.pubsubTopicMessageStoragePolicies, "should have Topic Message Storage Policies").to.equal("asia-east2-a");
    })
    
    it("Topic name is abc", () => {
        expect(data.pubsubTopicName, "Name should is abc").to.equal("abc");
    })

})
