import * as gcp from "@pulumi/gcp";
import { describe, it } from "mocha";
import { expect } from 'chai';




describe("Set Firwall", () => {
    const publicAllowAllInbound : gcp.compute.Firewall = PUBLICInBound;
    it("Set Allow All Inbound.", async () => {
        const AllowAllPublicInbound = await promise(publicAllowAllInbound.sourceRanges![0])
        expect(AllowAllPublicInbound).to.equal('0.0.0.0/0');
    });

    
});