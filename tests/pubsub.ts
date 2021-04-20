import * as pulumi from "@pulumi/pulumi";
import { expect } from "chai"
import "mocha"
import * as stack from "./stack.json"

const data = stack.deployment.resources[0].outputs


describe("PubSub", () => {
    
    it("Topic name is abc", () => {
        expect(data.pubsubTopicName, "Name should is abc").to.equal("abc");
    })

})
